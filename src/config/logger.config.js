const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports =[];
//added custom format for console because it has a extra feature of colour
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.timestamp({
            //first argument to the combine method
            format: 'YYYY-MM-DD HH:MM:ss'
        }),
        //second argument to combine method
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs'

}))
//.touppercase was problematic in log.level method
const logger = winston.createLogger({
    //default formatting
    format: winston.format.combine(
        winston.format.timestamp({
            //first argument to the combine method
            format: 'YYYY-MM-DD HH:MM:ss'
        }),
        //second argument to combine method
        winston.format.printf((log)=> `${log.timestamp} [${log.level}]: ${log.message}`)
    ),
    //identify where our logs are going to be printed
    transports: allowedTransports
  });
  
 
  module.exports =logger;