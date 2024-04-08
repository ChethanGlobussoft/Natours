// Define a class APIFeatures for building MongoDB query strings
class APIFeatures {
  constructor(query, queryString) {
    this.query = query; // MongoDB query object
    this.queryString = queryString; // Query string from URL
  }

  // Method for filtering MongoDB queries based on query parameters
  filter() {
    const queryObj = { ...this.queryString }; // Clone the query string object
    const excludedFields = ['page', 'sort', 'limit', 'fields']; // Exclude pagination, sorting, and field selection parameters
    excludedFields.forEach((el) => delete queryObj[el]); // Remove excluded fields from the query object

    // Advanced filtering using MongoDB query operators ($gte, $gt, $lte, $lt)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // Update the MongoDB query with the filtered query object
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  // Method for sorting MongoDB queries based on sort parameters
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' '); // Convert sort parameter to MongoDB sort format
      this.query = this.query.sort(sortBy); // Apply sorting to the MongoDB query
    } else {
      this.query = this.query.sort('-createdAt'); // Default sorting by createdAt field in descending order
    }

    return this;
  }

  // Method for selecting specific fields in MongoDB queries
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' '); // Convert fields parameter to MongoDB select format
      this.query = this.query.select(fields); // Apply field selection to the MongoDB query
    } else {
      this.query = this.query.select('-__v'); // Exclude __v field by default
    }

    return this;
  }

  // Method for paginating MongoDB query results
  paginate() {
    const page = this.queryString.page * 1 || 1; // Convert page parameter to number (default to 1)
    const limit = this.queryString.limit * 1 || 100; // Convert limit parameter to number (default to 100)
    const skip = (page - 1) * limit; // Calculate skip value for pagination

    // Apply pagination to the MongoDB query
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

// Export the APIFeatures class for use in other modules
module.exports = APIFeatures;
