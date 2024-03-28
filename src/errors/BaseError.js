class BaseError extends Error {
    constructor(name, statusCode , description){
        super(description);
        this.name =name;
        this.statusCode =statusCode;
        Error.captureStackTrace(this);
    }
    //with or without stacktrace
}
module.exports = BaseError;