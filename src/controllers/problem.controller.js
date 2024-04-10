const { StatusCodes, NOT_IMPLEMENTED } = require("http-status-codes");
const NotImplemented= require('../errors/notImplemented.error');
const BadRequest= require('../errors/badrequest.error');
const {ProblemService}= require('../services');
const {pProblemRepository, ProblemRepository}= require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
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
function getProblem(req,res,next){
   try {
     throw new NotImplemented('addProblem');
   } catch (error) {
        next(error);
   }
}
function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
}

function deleteProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    })
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