import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { userauth } from './Routes/userauth.js';
dotenv.config();
const app = express();
app.use (json());
app.use(cors(({
    origin: '*',        
    credentials: true
 }))) 
      
app.use('/',userauth);




mongoose.connect('mongodb://localhost:27017/Blogs ').then(()=>{
    console.log("Mongodb connected Successfully to Blogs Application");})
    .catch((error)=>{
        console.error("Mongodb connection failed",error);
});
app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
    
});