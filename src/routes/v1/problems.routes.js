const express = require('express');

const {problemController } = require('../../controllers/index');

const problemRouter = express.Router();
//camel case nned to be done 
//controller is the last layer of middlewares
problemRouter.get('/ping', problemController.pingProblemController);
problemRouter.get('/:id', problemController.getProblem);
problemRouter.get('/:id', problemController.getProblems);
problemRouter.post('/:id', problemController.addProblem);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.put('/:id',problemController.updateProblem);

module.exports = problemRouter;