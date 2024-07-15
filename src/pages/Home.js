import React, { useState } from 'react'
import { CreatePost } from '../components/CreatePost'
import { FaEdit } from "react-icons/fa";
import { Post } from '../components/Post';
import { Login } from '../components/Login';

export const Home = () => {
    const [visibility,setVisibility]=useState(false);

  return (
    <>
    <div className=""></div>
    <CreatePost visibility={visibility} setVisibility={setVisibility}/>
      
      <div className="w-full flex flex-col items-center justify-center  mt-10 gap-8">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

      </div>
      <Login/>
      
    
    
    <button onClick={()=>setVisibility(true)} className='font-bold rounded-full ring-4 ring-slate-800 p-5 flex items-center justify-center fixed bottom-32  right-5 bg-slate-900 w-[70px] h-[70px] hover:scale-[1.1] focus:scale-[1.1] transition-all duration-300 ease-in-out text-white/80 hover:text-white focus:text-white'><FaEdit className='text-3xl '/></button>
    </>

  )
}
