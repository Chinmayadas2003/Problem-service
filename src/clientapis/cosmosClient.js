const { CosmosClient } = require('@azure/cosmos');
//const { ATLAS_DB_URL, NODE_ENV,key } = require('./server.config');
const { Key, endpoint } = require('../config/server.config');


//connecting your code to cosmos db
const endPoint = endpoint;

const key =Key;

const databaseId= "logging-store";

const containerId = "error-logs";

const client = new CosmosClient({
    endpoint: endPoint, // Correct spelling for the property name
    key: key
});
const database = client.database(databaseId);
const container =database.container(containerId);

//add function
async function logToCosmosDB(level,message){
    try {
        
    await container.items.create({
        timeStamp: new Date().toISOString(),
        level: level,
        message: message
    });

    console.log("log entry created in cosmosDB")
    } catch  {
        
        console.log("Error loggin to cosmos db");
    }
}


module.exports ={
    logToCosmosDB
};