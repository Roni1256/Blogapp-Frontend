import React from 'react'
import profilepic from '../assets/pic.jpg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoCloseCircleOutline } from "react-icons/io5";


const inputField='px-6 py-2 text-lg font-semibold ring-2 ring-gray-600 rounded-lg outline-none focus:ring-3 focus:ring-black bg-white w-full tracking-wide bg-gray-100'

export const CreatePost = ({visibility,setVisibility}) => {
  return (
    <>
    <div className="w-full  fixed top-0 left-0 ">
        <div className={visibility?"w-[500px] bg-white  rounded-md ring-1 ring-black/50 fixed left-5 top-[120px]  ":"w-[500px] bg-white  rounded-md ring-1 ring-black/50 fixed top-[120px]  left-[-500px]  z-10 "}>
            <header  className='flex justify-between bg-slate-800 text-white p-3 '>
                <div className="flex gap-5 items-center">
                 <h1 className='text-white text-2xl font-semibold '>Add Blog</h1>
                </div>
                
                <button className='text-xl text-white px-6 hover:text-red-600 focus:text-500cd '
                onClick={()=>setVisibility(false)}
                ><IoCloseCircleOutline className='text-4xl font-bold'/></button>
            </header>
            
            <form action="submit" className='flex flex-col gap-4 p-4  items-center  justify-center'>
                <input type="text" placeholder='Title' className={inputField} />
                <input type="text" placeholder='Descriptions' className={inputField} />
                <input type="text" placeholder='Tags' className={inputField} />

                <input type="file" name="Upload Image" id="" />
                <div className=" w-full rounded-lg">
                    <ReactQuill theme="snow" className=''/>
                </div>
                <button className='text-white bg-slate-900 w-fit text-xl font-bold  rounded-lg px-5 py-2 hover:scale-[1.1] ease-in-out  transition-all duration-300'>Post</button>
            </form>
            
        </div>
    </div>
    </>
  )
}
