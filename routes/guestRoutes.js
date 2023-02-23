const express = require('express');
const passport = require('passport');

const route = express.Router();

const { renderGuestPage, signInAndSendStatus, signUpAndSendStatus } = require('../controllers/guestControllers');

route.get('/', renderGuestPage);

route.post('/signin', signInAndSendStatus);

route.post('/signup', signUpAndSendStatus);

// route.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// route.get('/google/callback', passport.authenticate('google', { failureRedirect: '/', successReturnToOrRedirect: '/' }));

module.exports = route;
