const { StatusCodes, NOT_IMPLEMENTED } = require("http-status-codes");
const NotImplemented= require('../errors/notImplemented.error');
const BadRequest= require('../errors/badrequest.error');
function pingProblemController(req,res){
    return res.json({message:'ping controller is up'});
}

function addProblem(req, res,next){
    try {
        throw new BadRequest('Problem Name1',{missing: "Problem Name"});
      } catch (error) {
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