const express = require('express');

const route = express.Router();

const { isAuth } = require('../middlewares/midls');

const { renderMainPage } = require('../controllers/indexControllers');

route.get('/', isAuth, renderMainPage);

module.exports = route;
