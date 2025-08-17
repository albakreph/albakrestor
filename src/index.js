const app = require('./app');
const config = require('./config');
const { connectDB } = require('./loaders/sequelize');

const startServer = async () => {
  await connectDB();

  const server = app.listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });

  return server;
};

const server = startServer();

module.exports = server;
