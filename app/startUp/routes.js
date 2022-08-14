const express = require('express');
const countryRouter = require('../routes/countryRoutes');
const errorHandler = require('../middleware/errorHandler');

module.exports = (app) => {
    // Middleware
    app.use(express.json());
    app.use(errorHandler);

    // Routes
    app.use('/api/countries', countryRouter)
};
