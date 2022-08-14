const express = require('express');
const countryRouter = require('../routes/countryRoutes');
const holidayRouter = require('../routes/holidayRoutes');
const errorHandler = require('../middleware/errorHandler');

module.exports = (app) => {
    // Middleware
    app.use(express.json());
    
    // Routes
    app.use('/api/countries', countryRouter);
    app.use('/api/holidays', holidayRouter);
    
    // Error Handler
    app.use(errorHandler);
};
