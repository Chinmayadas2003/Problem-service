const express = require('express');
const bodyParser =require('body-parser');
const BaseError = require('./errors/BaseError.js');
const { PORT } = require('./config/server.config.js');
const mongoose= require('mongoose');
const apiRouter =require('./routes/index.js');
const errorHandler = require('./utils/errorHandler.js');
const {connectToDB,connectToLogDB}=require('./config/dbConfig.js');
const Problem = require('./models/problem.model.js');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
//what if error handler middleware is initiated in the begining and middle -error handler of express default kicks in

//if any request comes and route starts with /api we map it to apiRouter
//if next middleware is not called how it reaches the next middleware
app.use('/api', apiRouter);


app.get('/ping',(req,res)=>{
    return res.json({message :"problem service is alive"});
})


//last middleware if error comes
//write other error classes
app.use(errorHandler);

app.listen(PORT, async()=>{
    console.log(`server started at PORT :${PORT}`);
    await connectToDB();
    // await connectToLogDB();
    //mongoose help us to define schema
    //make orm queries on our db
    console.log("sucessfully connected to db");
    /*Problem.create({

    });*/

    

}

)
