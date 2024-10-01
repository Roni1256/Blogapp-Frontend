import React from 'react'
import { CgCloseO} from 'react-icons/cg'
import { FaFacebook } from 'react-icons/fa6'
import { GrGithub, GrGoogle } from 'react-icons/gr'

export const Register = ({setClose}) => {

  return (
    <>
    <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 backdrop-blur-md">
      <div className=" w-[400px]  rounded-md text-gray-200 flex flex-col items-center bg-slate-800 p-4 ">
      <div className="flex  justify-between w-full">
        <h1 className="text-3xl font-bold">Register</h1>
        <button onClick={()=>setClose(false)}><CgCloseO size={30} className='hover:text-red-600 '/></button>
      </div>
      
      <form action="submit" className='flex flex-col gap-4 w-full mt-5 justify-center items-center'>
      <input type="text" placeholder="Name" className="p-2 my-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-white w-full " />
        <input type="text" placeholder="Username" className="p-2 my-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-white w-full " />
        <input type="password" placeholder="Password" className="p-2 my-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-white w-full" />
        <input type="text" placeholder="Conform Password" className="p-2 my-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-white w-full " />
        <button className="p-2 bg-white text-slate-700 w-1/2 text-lg font-semibold rounded-md hover:scale-[1.1] transition-all ease-in-out duration-300 ">Register</button>
        <div className="">
            <h1>Register with:</h1>
            <div className="flex  gap-4 w-full mt-5 justify-center items-center">
                <button className="p-2 bg-white text-slate-700 w-1/2 text-lg font-semibold rounded-md hover:scale-[1.1] transition-all ease-in-out duration-300 hover:bg-green-500 "><GrGoogle/></button>
                <button className="p-2 bg-white text-slate-700 w-1/2 text-lg font-semibold rounded-md hover:scale-[1.1] transition-all ease-in-out duration-300 hover:bg-blue-600 "><FaFacebook/></button>
                <button className="p-2 bg-white text-slate-700 w-1/2 text-lg font-semibold rounded-md hover:scale-[1.1] transition-all ease-in-out duration-300  hover:bg-black"><GrGithub/></button>
            </div>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}
