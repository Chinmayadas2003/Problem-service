//base error class umberalla class extends from node js error class using basic inheritance
class BaseError extends Error {
    constructor(name, statusCode , description,details){
        super(description);
        this.name =name;
        this.statusCode =statusCode;
        this.details=details;
        Error.captureStackTrace(this);
        
    }
    //with or without stacktrace
}
module.exports = BaseError;