import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";
dotenv.config({
    path : "./env"
});
connectDb().then(()=>{

    
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`SERVER STARTED ! AT PORT 8000`)
    });
}).catch((err)=>{
    if (err){
        console.log("MONG0DB CONNECTION FAILED!",err)
    }
})