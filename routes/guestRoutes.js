const express = require('express');

const route = express.Router();

const { renderGuestPage } = require('../controllers/guestControllers');

route.get('/', renderGuestPage);

module.exports = route;
