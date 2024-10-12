const mongoose = require('mongoose');
const { ATLAS_DB_URL, LOG_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB() {
    try {
        if (NODE_ENV === "development") {
            await mongoose.connect(ATLAS_DB_URL);
            console.log('Connected to ATLAS_DB successfully');
        }
    } catch (error) {
        console.log('Unable to connect to the ATLAS DB server');
        console.log(error);
    }
}

async function connectToLogDB() {
    try {
        if (NODE_ENV === "development") {
            await mongoose.connect(LOG_DB_URL);
            console.log('Connected to LOG_DB successfully');
        }
    } catch (error) {
        console.log('Unable to connect to the LOG DB server');
        console.log(error);
    }
}

module.exports = {
    connectToDB,
    connectToLogDB
};