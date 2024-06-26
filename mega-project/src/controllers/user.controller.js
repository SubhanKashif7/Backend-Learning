import asyncHandler from "../utils/asyncHandler/asyncHandler.js";
import emailExistence from "email-existence";
import { ApiError } from "../utils/apiError/apiError.js";
import {User} from "../models/user.model.js";
import fileUpload from "../utils/cloudinary/cloudinary.js";
import {ApiResponse} from "../utils/apiResponse/apiResponse.js"
const registerUser = asyncHandler( async (req,res)=>{
     const {fullname,email,username,password} = req.body;
     

    if (
        [fullname , email , username].some((field)=>{
            return field?.trim()===""
        })
        
    ){
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or : [{email},{username}]
    });

    if (existedUser){
        throw new ApiError(409,"User with email or username already exists");
    };

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.file?.coverIMAGE

    if (!avatarLocalPath){
        throw new ApiError(400,"Avatar File is required");
    };

    
    const avatar = await fileUpload(avatarLocalPath);
    const coverImage = await fileUpload(coverImageLocalPath);

    if (!avatar){
        throw new ApiError(400,"Avatar File is required");
    };

    const user = await  User.create({
        fullname,
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        username : username.toLowerCase(),
        password
    });


    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    if (!createdUser){
        throw new ApiError(500,"Something Went  Wrong while registering the user!!");
    }

    
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered Successfully")
    )
});

export default registerUser;