import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MONGO DB CONNECED ! DB HOST ${connection.connection.host}`);

    }catch(e){
        console.log(e);
        process.exit(1)
    }
};

export default connectDb;