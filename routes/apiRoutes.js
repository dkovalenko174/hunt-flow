const express = require('express');

const route = express.Router();

const { newApplicants } = require('../controllers/apiControllers');

route.get('/new', newApplicants);

module.exports = route;
