import mongoose from "mongoose";
const DocterSchema = new mongoose.Schema({
    name : {
        type : String,
        age : Number,
        required : true
    },

    specialization : {
        type : String,
        required : true
    },

    worksAt : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospiatal"
    }
},{timestamps : true})