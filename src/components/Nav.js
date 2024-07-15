import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import samplepic from '../assets/pic.jpg'



const topLink='text-xl font-bold text-white/70 hover:text-white focus:text-white hidden md:block'
export const Nav = () => {

  const [reg,setReg]=useState(false)
  const [show,setShow]=useState(false)
  return (
    <>
        <div className="w-full md:w-3/4 lg:w-98 px-5 fixed   z-20 ">
            <div className="w-full py-3  flex  bg-slate-900 text-white rounded-lg px-4 items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] justify-between">
                <h1 className='text-2xl font-bold tracking-wide  cursor-pointer' >Blogs</h1>
                <input type="text" name="" id="" className='bg-white text-black md:w-64 w-1/2  rounded-lg py-2 px-4 focus:outline-none ' placeholder='Search'/>
                <div className="px-5 flex gap-4 ">
                  <button className={reg?topLink:'hidden'} >Login</button>
                  <button className={reg?topLink:'hidden'} >Register</button>
                  <div className={!reg?"flex gap-5":"hidden"}>
                    
                    <img src={samplepic} alt="" className='w-14 h-14 rounded-full cursor-pointer ring-2 ring-slate-200' />
                  </div>
                  
                </div>
                <button className='md:hidden ' onClick={()=>setShow(!show)}><IoMenu className='text-4xl '/></button>
                <div className="absolute right-10 top-12">
                  <PopNav show={show} auth={reg}/>
                </div>
            </div>
        </div>
    </>
  )
}

function PopNav({show,auth }){
  return<>
  <div className={show?" ring-1 ring-black text-black bg-white rounded-md flex flex-col justify-between items-center  gap-3 w-[150px] p-5 pt-1":"hidden"}>
    <button className={!auth?' border-b-2  border-gray-200 w-full ':'hidden'}>Login</button>
    <button className={!auth?' border-b-2  border-gray-200 w-full ':'hidden'}>Register</button>
    <button className={auth?' border-b-2  border-gray-200 w-full ':'hidden'}>Profile</button>
    <button className={auth?' border-b-2  border-gray-200 w-full ':'hidden'}>Logout</button>
  </div>
  </>
}