const express = require('express');

const {ProblemController } = require('../../controllers/index');

const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingProblemController);
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/:id', ProblemController.getProblems);
problemRouter.post('/:id', ProblemController.addProblem);
problemRouter.delete('/:id',ProblemController.deleteProblem);
problemRouter.put('/:id',ProblemController.updateProblem);

module.exports = problemRouter;