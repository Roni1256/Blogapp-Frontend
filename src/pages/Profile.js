import React, { useState } from 'react'
import user from '../assets/pic.jpg'
import { BiEdit,  BiLeftArrowAlt, BiLogOut,BiRightArrowAlt  } from 'react-icons/bi'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { MyPostCard } from '../components/MyPostCard'
import '../index.css'
import { EditProfile } from '../components/EditProfile'

export const Profile = () => {
  const [showAbout,setAbout]=useState(false)
  const [showEdit,setEdit]=useState(false)
  return (
    <>
    <div className="h-screen w-full bg-white grid
    grid-rows-12
    lg:grid-cols-5 mt-14">
      <div className=" lg:col-span-2 bg-slate-900 row-span-5  items-center lg:items-start lg:row-span-full grid relative overflow-hidden p-3 pt-10 lg:pt-20">
        <div className="px-5  w-full h-full  flex lg:flex-col justify-evenly lg:justify-normal items-center gap-5  ">
          <div className="flex flex-col justify-evenly lg:justify-normal  gap-4">
            <img src={user} className='rounded-full h-40 w-40 object-cover ring-2 ring-white ' />
            <div className=" flex gap-5 ">
              <button href="#" className='  rounded-lg text-white hover:text-purple-600 hover:scale-[1.1] duration-300 ease-in-out hover:bg-white ' ><FaInstagram size={30}/></button>
              <button href="#" className='  rounded-lg text-white hover:text-blue-600 hover:scale-[1.1] duration-300 ease-in-out hover:bg-white ' ><FaFacebook size={30}/></button>
              <button href="#" className='  rounded-lg text-white hover:text-gray-900 hover:scale-[1.1] duration-300 ease-in-out hover:bg-white ' ><FaGithub size={30}/></button>
              <button href="#" className='  rounded-lg text-white hover:text-blue-900 hover:scale-[1.1] duration-300 ease-in-out hover:bg-white ' ><FaTwitter size={30}/></button>
            </div>
          </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl text-white">Roniwilliams</h1>
          <span className='text-slate-300 font-bold text-md'>Full-Stack Developer</span>
          <div className="flex flex-col gap-3 mt-5">
            <button className=' bg-white text-slate-700 p-3 rounded-lg flex items-center justify-between w-full hover:scale-[1.1] transition-all ease-in-out duration-300' onClick={()=>setEdit(true)}>Edit Profile <BiEdit/></button>
            <button className=' ring-2 ring-white  text-white p-3 rounded-lg flex items-center justify-between w-full hover:bg-white hover:text-slate-700 transition-all ease-in-out duration-300'>Log-Out <BiLogOut/></button>

          </div>
        </div>
        </div>
        <div className={showAbout?"absolute top-5 p-3 pt-10 w-2/3 h-full bg-white text-slate-600  rounded-lg right-0  transition-all ease-in-out duration-300 no-scrollbar":"absolute top-5 p-3  w-2/3 pt-10 h-full bg-white text-slate-600  rounded-lg -right-2/3 transition-all ease-in-out duration-300 no-scrollbar"}>
          <span className='text-xl font-semibold rounded-b-md'>About Me</span>
          <p className='mt-4 text-justify overflow-y-scroll p-3 h-[80%] no-scrollbar'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga rem facilis, sapiente possimus optio tenetur veritatis est ad minima. Eligendi fuga nemo eaque consequatur voluptatibus laudantium tempora quam tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga rem facilis, sapiente possimus optio tenetur veritatis est ad minima. Eligendi fuga nemo eaque consequatur voluptatibus laudantium tempora quam tenetur?</p>
      <button className='absolute left-[-50px]  bg-white rounded-full p-3 transition-all ease-in-out duration-300 top-32 hover:text-blue-700' onClick={()=>setAbout(!showAbout)}>{showAbout?<BiRightArrowAlt size={30}/>:<BiLeftArrowAlt size={30}/>}</button>
        </div>

      </div>

      <div className="lg:col-span-3 row-span-7 lg:row-span-full grid lg:flex lg:flex-col lg:pt-20 lg:px-7 p-2 ">
        <h1 className='text-xl text-slate-600 font-bold h-fit'>My Posts</h1>
        <div className="  px-2 overflow-y-auto no-scrollbar flex flex-col gap-3 lg:grid lg:grid-cols-2  shadow-inner shadow-gray-500  rounded-lg mt-3 items-center py-10 bg-slate-900">
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>
          <MyPostCard/>


        </div>
        
      </div>
      <EditProfile setShow={setEdit} show={showEdit}/>
    </div>
    </>
  )
}
