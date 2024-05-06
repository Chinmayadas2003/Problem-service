const { CosmosClient } = require('@azure/cosmos');


//connecting your code to cosmos db
const endPoint = "https://algocode.documents.azure.com:443/";

const key ="2M1HwWnaVs5qs7GLxklgV5FOnzKLTj2S1PGz4i9XReS6NSLUIt46etIdEpxHTZ4be9oBxaCTrTclACDbe8oasg==";

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