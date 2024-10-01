import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { Post } from '../components/Post';
import { MostRated } from '../components/MostRated';
import { useNavigate } from 'react-router';


export const Home = () => {
    const navigate=useNavigate();

  return (
    <>
    
    
      <div className="w-full flex flex-col items-center justify-center  mt-10 gap-8 md:grid md:grid-cols-2 md:gap-10 md:mt-20 lg:grid-cols-3 lg:gap-16  p-5">
      <MostRated/>
        <Post/>
        <Post/>
        <Post/>

      </div>
    
      
    
    <button onClick={()=>{navigate('/newpost')}} className=' bg-slate-900 text-gray-400 hover:text-white hover:scale-[1.1] rounded-full p-5 w-16 h-16 ring-4 ring-slate-600  flex items-center justify-center fixed bottom-32 right-20 z-20 transition-all ease-in-out duration-300'><FaEdit size={40}/></button>
    </>

  )
}
