const logger = require("../config/logger.config");
const BaseError = require("../errors/BaseError");
const { StatusCodes }= require('http-status-codes');

//4 parameter exlusively works as a error handler not execudted between middleware(express js middleware)
//if 3 parameters it also works as a middleware and kicks in in between request if placed as such
// what if error handler has a error it will be handled by last express js error handler
//class diagram-review //documentation// excellent debugging skills
//zepto backend codebase
function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}// because this is an exception no data is going to be provided
        })
    }
    //giving 2 logs one for controllers.js and one for internal server error
    //logger.error('Something went wrong');
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong",
        error: err,
        data: {}// because this is an exception no data is going to be provided
    })
}

module.exports = errorHandler;