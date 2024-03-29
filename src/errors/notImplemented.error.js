const BaseError = require("./BaseError");
const {StatusCodes}= require('http-status-codes');

class NotImplemented extends BaseError{
    constructor(methodname){
        super("NotImplemented",StatusCodes.NOT_IMPLEMENTED,`${methodname}something went wrong`,{});
    }
}

module.exports = NotImplemented;