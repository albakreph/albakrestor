const { DataTypes } = require('sequelize');
const { sequelize } = require('../src/loaders/sequelize'); // Adjust path to get the sequelize instance

const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'customer' // 'customer' or 'admin'
  }
}, {
  // Other model options go here
});

module.exports = User;
