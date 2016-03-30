'use strict';

const users = require('../controllers/room');

module.exports = function (app) {
	app.get('/users', users.login);

	};
