const express = require('express');
const config = require('./config');
const routes = require('./api');

const app = express();

// Basic middleware for parsing JSON
app.use(express.json());

// Load API routes
app.use(config.api.prefix, routes());

// Export the app
module.exports = app;
