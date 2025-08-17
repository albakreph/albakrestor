const { Router } = require('express');
const isAuth = require('../middlewares/auth');

const route = Router();

module.exports = (app) => {
  app.use('/users', route);

  // This route is protected, it requires a valid token
  route.get('/me', isAuth, (req, res) => {
    // The isAuth middleware attaches the user payload to req.user
    res.json({ user: req.user });
  });
};
