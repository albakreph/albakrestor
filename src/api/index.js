const { Router } = require('express');
const healthRoute = require('./routes/health');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

// guaranteed to get dependencies
module.exports = () => {
	const app = Router();
	healthRoute(app);
	authRoute(app);
	userRoute(app);

	return app;
}
