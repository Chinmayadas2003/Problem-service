const express = require('express');

const {problemController } = require('../../controllers/index');

const problemRouter = express.Router();
//camel case nned to be done 
//controller is the last layer of middlewares
//problems in big PR's
problemRouter.get('/ping', problemController.pingProblemController);
problemRouter.get('/:id', problemController.getProblem);
problemRouter.get('/', problemController.getAllProblems);
problemRouter.post('/', problemController.addProblem);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.put('/:id',problemController.updateProblem);

module.exports = problemRouter;