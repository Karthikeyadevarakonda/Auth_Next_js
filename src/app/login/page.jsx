"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import loginAction from "../ServerActions/loginAction";

const page = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

 async function handleLogin(e){
    e.preventDefault()
    const loginDetails = {email,password};
    if(!email || !password){
      return alert("EMAIL AND PASSWORD MUST...!")
    }
    console.log(loginDetails)
    try {
       await loginAction(loginDetails)
       router.push("/");
     
    } catch (error) {
      setError("INVALID USERNAME PASSWORD")
    }
   
 }

   return (
    <div className="flex flex-col gap-3 items-center justify-center h-[100vh] px-3 md:px-0 bg-slate-100">
      <div className="p-2 md:p-6 h-full flex flex-col items-center justify-center  w-full md:w-1/3 ">
        <h1 className="font-bold tracking-widest text-[#364153] text-2xl mb-3">
          LOGIN FORM
        </h1>
        <form
          className="bg-white p-4 pt-10 space-y-5 w-full min-h-auto border-3 border-t-[#bbf451] rounded-2xl border-transparent"
          onSubmit={handleLogin}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#cad5e2] sm:text-sm/6"
            placeholder="Enter Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#cad5e2] sm:text-sm/6"
            placeholder="Enter Password"
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full h-10 bg-[#bbf451] text-white outline-0 rounded font-bold"
          >
            LOG-IN
          </button>
          <Link
            href="/register"
            className="block text-center w-full text-sm md:text-[15px] text-gray-600 hover:underline"
          >
            Don't Have an Account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default page
