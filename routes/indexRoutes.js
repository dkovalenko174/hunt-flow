const express = require('express');

const route = express.Router();

// const { isAuth } = require('../middlewares/midls');

const { renderMainPage, logOut } = require('../controllers/indexControllers');

route.get('/', renderMainPage);

route.get('/loguot', logOut);

module.exports = route;
