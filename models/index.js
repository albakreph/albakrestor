const { sequelize } = require('../src/loaders/sequelize');
const User = require('./user');

const db = {
  sequelize,
  User,
};

// You can add associations here in the future
// e.g., db.User.hasMany(db.Order);

module.exports = db;
