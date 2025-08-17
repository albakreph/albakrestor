const { Router } = require('express');
const authService = require('../../services/authService');

const route = Router();

module.exports = (app) => {
  app.use('/auth', route);

  route.post('/signup', async (req, res, next) => {
    try {
      const newUser = await authService.signup(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      // Basic error handling
      // If it's a validation error from Sequelize (e.g., duplicate email)
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: 'Email already exists.' });
      }
      // Pass other errors to the next middleware
      return next(error);
    }
  });

  route.post('/signin', async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const { user, token } = await authService.signin(email, password);
      return res.json({ user, token }).status(200);
    } catch (error) {
      // Basic error handling
      return res.status(401).json({ message: error.message });
    }
  });
};
