import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true
        },
        age : {
            type : Number,
            required : true
        },
        email : {
            type : String,
            required : true,
            lowercase : true
        },
        phoneNo : {
            type : Number,
            required : true
        },
        password : {
            type : String,
            required : true
        }
        

    },{timestamps : true}
);

export const User = mongoose.model("User",userSchema)