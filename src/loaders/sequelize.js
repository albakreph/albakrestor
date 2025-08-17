const { Sequelize } = require('sequelize');
const { development } = require('../../config/config.json');

const sequelize = new Sequelize({
  dialect: development.dialect,
  storage: development.storage,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');

  } catch (error) {
    console.error('Unable to connect to the database or sync models:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
