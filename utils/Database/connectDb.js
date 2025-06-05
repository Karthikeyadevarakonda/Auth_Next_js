import mongoose from "mongoose";

export const connectDb = async()=>{
     try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DATABASE CONNECTED SUCESSFULLY")
     }catch(err){
        console.error("ERR IN DB CONNECT : ",err)
     }
}