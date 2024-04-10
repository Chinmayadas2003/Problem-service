const mongoose = require('mongoose');
//const { Schema } = mongoose;

const problemSchema =  new mongoose.Schema({
    title:{
        type:String,
        required: [true,'title cannot be empty']
    },
    description: {
        type:String,
        required: [true,'description cannot be empty']
    },
    difficulty:{
        type:String,
        enum: ['easy','medium','hard'],
        required: [true,'difficulty cannot be empty'],
        default:'easy'
    },
    //array of objects in testcases
    //[{input:5,output:'10'},{input:'2',output:'20'}]
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],
    editorial: {
        type:String
    }
});
//model object can be used to query data from the tables
const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;