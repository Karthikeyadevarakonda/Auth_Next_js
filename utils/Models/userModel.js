import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      username:{type:String,required:true},
      email:{type:String,required:true,unique:true},
      password:{type:String,required:true},
      role:{type:String,enum:['user','admin'],default:'user'}
})

export const userModel = mongoose.models.users || mongoose.model('users',userSchema)