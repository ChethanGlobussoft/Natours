const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Natours API Documentation',
      description: 'Natours is a nature tours application',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
        description: 'Local server',
      },
      {
        url: 'https://natours-2-upil.onrender.com',
        description: 'Live server',
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = (app, port) => {
  // Swagger Page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
