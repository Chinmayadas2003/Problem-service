const BaseError = require("./BaseError");
const {StatusCodes}= require('http-status-codes');

class InternalServerError extends BaseError{
    constructor(details){
        super("serverError",StatusCodes.INTERNAL_SERVER_ERROR,`something went wrong`,details);
    }
}

module.exports = InternalServerError;