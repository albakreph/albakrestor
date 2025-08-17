const app = require('./app');
const config = require('./config');

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

module.exports = server;
