const express = require('express');
const bodyParser =require('body-parser');
const BaseError = require('./errors/BaseError.js');
const { PORT } = require('./config/server.config.js');

const apiRouter =require('./routes/index.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//if any request comes and route starts with /api we map it to apiRouter
app.use('/api', apiRouter);


app.get('/ping',(req,res)=>{
    return res.json({message :"problem service is alive"});
})


app.listen(PORT,()=>{
    console.log(`server started at PORT :${PORT}`);
    try{
        //throw signifies that you have to manually catch a error
        //finally block
        throw new BaseError("some error", 404 ,{message:"something is wrong"});
    } catch(error){
        console.log("something went wrong");
    }
    finally{
        console.log("executed finally");
    }

})
