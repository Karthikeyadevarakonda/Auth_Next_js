import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { redirect } from "next/navigation";
import { connectDb } from "../../utils/Database/connectDb";
import { userModel } from "../../utils/Models/userModel";
import bcrypt from 'bcryptjs'


export const {auth , signIn , signOut , handlers:{ GET, POST}} = NextAuth({
     providers:[
        CredentialsProvider({
            name:"credentials",
            async authorize(credentials){
              const {email, password} = credentials;

                try {

                  await connectDb();

                  const user = await userModel.findOne({email})

                  if(!user) return null;

                  const isValid = await bcrypt.compare(password,user.password)

                  if(!isValid) return null;
                   
                  return {id:user._id.toString(),name:user.username}

                } catch (error) {
                    console.log("ERROR IN AUTHENTICATION : ",error)
                }
            }
        })
     ],
     secret:process.env.SECRECT_KEY,
     pages:{
        signIn:"/login"
     }
})