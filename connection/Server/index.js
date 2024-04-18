import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/",(req,res)=>{
    res.json("DATA FROM SERVER")
});

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`APP LISTENING ON PORT ${port}`)
})