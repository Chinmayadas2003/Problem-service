const { StatusCodes, NOT_IMPLEMENTED } = require("http-status-codes");
const NotImplemented= require('../errors/notImplemented.error');
const BadRequest= require('../errors/badrequest.error');
const {ProblemService}= require('../services');
const {pProblemRepository, ProblemRepository}= require('../repositories');
const logger = require('../config/logger.config');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    logger.error("ping error logs for ping controller");
    return res.json({message:'ping controller is up'});
}

async function addProblem(req, res,next){
    try {
        console.log("incoming request body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
      } catch (error) {
        //if next is not called the request will stall.
           next(error);
      }
}
//next introduced because this controller is not the last middleware
async function getProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}
async function getProblems(req,res, next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
           success: true,
           message: 'Successfully fetched all problems',
           error: {},
           data: response
        })
      } catch (error) {
           next(error);
      }
}

async function deleteProblem(req, res, next){ 
    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problem',
            error: {},
            data: deletedProblem
        });
    } catch(error) {
        next(error);
    }
}

function updateProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

module.exports ={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}