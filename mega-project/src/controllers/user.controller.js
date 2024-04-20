import asyncHandler from "../utils/asyncHandler/asyncHandler.js";
import emailExistence from "email-existence";
import { ApiError } from "../utils/apiError/apiError.js";
const registerUser = asyncHandler( async (req,res)=>{
     const {fullname,email,username,password} = req.body;
     

    if (
        [fullname , email , username].some((field)=>{
            return field?.trim()===""
        })
        
    ){
        throw new ApiError(400,"All fields are required")
    }


});

export default registerUser;