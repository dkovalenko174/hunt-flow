const express = require('express');

const route = express.Router();

const {
  newApplicants, getAllUsers, getUser, updateStageUser,
} = require('../controllers/apiControllers');

route.get('/user/:id', getUser);
route.put('/user', updateStageUser);
route.get('/allusers', getAllUsers);
route.get('/filter/:id', newApplicants);

module.exports = route;
