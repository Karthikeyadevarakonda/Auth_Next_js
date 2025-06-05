
import { auth } from "./auth";
import { redirect } from "next/navigation";


const page = async() => {
  
  const session = await auth()

  if(!session){
     redirect("/login")
  }
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="text-center">MAIN PAGE</h1>
    </div>
  )
}

export default page
