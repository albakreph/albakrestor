const { Router } = require('express');
const healthRoute = require('./routes/health');

// guaranteed to get dependencies
module.exports = () => {
	const app = Router();
	healthRoute(app);

	return app;
}
