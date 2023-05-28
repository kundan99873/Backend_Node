const mongoose = require("mongoose");

const noteModel = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    subject : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        required : true
    },
    notes : {
        type : String,
        required : true
    },
    question : {
        type : String
    }
})

module.exports = mongoose.model("note",noteModel)