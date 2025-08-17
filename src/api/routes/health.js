const { Router } = require('express');

const route = Router();

module.exports = (app) => {
  app.use('/health', route);

  route.get('/', (req, res) => {
    return res.json({ status: 'UP' }).status(200);
  });
};
