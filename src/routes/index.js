const express = require('express');

const v1Router = require('./v1');

const apiRouter = express.Router();
//if any request comes and route starts with /v1 we map it to v1Router
apiRouter.use('/v1',v1Router);

module.exports = apiRouter;