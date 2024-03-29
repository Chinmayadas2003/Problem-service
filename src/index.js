const express = require('express');
const bodyParser =require('body-parser');
const BaseError = require('./errors/BaseError.js');
const { PORT } = require('./config/server.config.js');

const apiRouter =require('./routes/index.js');
const errorHandler = require('./utils/errorHandler.js');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//if any request comes and route starts with /api we map it to apiRouter
app.use('/api', apiRouter);


app.get('/ping',(req,res)=>{
    return res.json({message :"problem service is alive"});
})


//last middleware if error comes
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server started at PORT :${PORT}`);
    
        // opened a deb connection 
        // queried on db, but you got wrong syntax query
        // exception will be thrown
        
    try{
        //throw new BaseError("Not found",404,"Resource not found",{});
        //throw new NotFoundError1({});
    } catch(error){
        //log the error
        console.log("something went wrong",error.name,error.stack);
    }
    finally{
        //close the db connection
        console.log("executed finally");
    }

})
