const express = require('express');
const errorHandler = require('../middleware/errorHandler');

module.exports = (app) => {
    // Middleware
    app.use(express.json());
    app.use(errorHandler);

    // Routes
};
