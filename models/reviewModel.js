// Import required files
const mongoose = require('mongoose');
const Tour = require('./tourModel');

// Schema for reviews collection
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      require: [true, 'Review cannot be empty!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexing
// No multiple reviews for a tour by user (One user One review per tour)
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

// Population user field
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

// Calculating averages statically
reviewSchema.statics.calcAverage = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

// Calculating averages when creating review
reviewSchema.post('save', function () {
  this.constructor.calcAverage(this.tour);
});

// Calculating averages when updating/deleting review
reviewSchema.post(/^findOneAnd/, async function (doc) {
  await doc.constructor.calcAverage(doc.tour);
});

// Model the schema
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
