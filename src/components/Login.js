import React from 'react'
import { CgCloseO, CgCloseR } from 'react-icons/cg'

export const Login = ({setClose}) => {
  return (
   <>
    <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 backdrop-blur-md">
      <div className="w-[400px] h-1/2 rounded-md text-gray-200 flex flex-col items-center bg-slate-800 p-4 ">
      <div className="flex  justify-between w-full">
        <h1 className="text-3xl font-bold">Login</h1>
        <button onClick={()=>setClose(false)}><CgCloseO size={30} className='hover:text-red-600 '/></button>
      </div>
      
      <form action="submit" className='flex flex-col gap-4 w-full mt-5 justify-center items-center'>
        <input type="text" placeholder="Username" className="p-2 my-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-white w-full " />
        <input type="password" placeholder="Password" className="p-2 my-2 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-white w-full" />
        <a href="#" className='text-red-400 '>Forget Password?</a>
        <button className="p-2 bg-white text-slate-700 w-1/2 text-lg font-semibold rounded-md hover:scale-[1.1] transition-all ease-in-out duration-300 ">Login</button>
        <a href="#" className='text-slate-400 text-lg font-semibold tracking-wide hover:text-white'>Register</a>
      </form>
      </div>
    </div>
   </>
  )
}
