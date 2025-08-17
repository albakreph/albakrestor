// NOTE: The use of dotenv has been temporarily disabled due to a technical issue
// with creating the .env file in the execution environment.
// Configuration values are hardcoded below as a temporary workaround.

// const dotenv = require('dotenv');

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// const envFound = dotenv.config();
// if (envFound.error) {
//   // This error should crash whole process
//   throw new Error("⚠️  Couldn't find .env file  ⚠️");
// }

module.exports = {
  /**
   * Your favorite port
   */
  port: 8080, // Hardcoded port

  /**
   * That long string that is used to sign cookies
   */
  jwtSecret: 'aVerySecureSecret!', // Hardcoded JWT secret

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
