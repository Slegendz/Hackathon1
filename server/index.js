{require('dotenv').config();}

const express=require("express");
const cors=require("cors");
const app=express();
const connect=require("./mongodb/database");

app.use(cors());
app.use(express.json());
const port=process.env.Port||4000;
connect();
app.use('/api/auth',require('./routes/auth'));


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})