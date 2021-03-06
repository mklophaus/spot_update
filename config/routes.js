var express = require('express'),
    passport    = require('passport'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var usersController   = require('../controllers/users');

// root path:
router.get('/', welcomeController.index);

router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) {
    return next();
  } else {
    res.redirect('/');
  }
}

module.exports = router;
