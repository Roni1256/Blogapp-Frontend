import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import user from '../assets/dummy.jpg'

export const Nav = () => {
  const[showMenu,setMenu]=useState(false)
  const[showLogin,setLogin]=useState(false)
  const[showReg,setReg]=useState(false)
  const [auth,setAuth]=useState(true)

  return (
    <>
    <div className="w-full  bg-slate-900 text-slate-300 p-4 flex justify-between items-center lg:rounded-bn-md fixed top-0 shadow-sm shadow-black/50 z-20 " >

      <Link  className='text-xl font-semibold hover:text-white lg:w-full pl-10' to={'/'}>Blogs</Link>
      
      <input type="text" className=' rounded-md p-2 border-2 border-slate-300 focus:ring-2  bg-slate-500 text-md focus:outline-none focus:ring-slate-600 transition-all ease-in-out duration-150  lg:w-full' placeholder='Search'/>
      <ul className='hidden lg:flex gap-8 items-center text-lg font-semibold  justify-end w-full pr-10'>  
        <li>
          {!auth&&<button className='hover:text-white transition-all ease-in-out duration-300' onClick={()=>setLogin(true)}>Login</button>}
        </li>
        <li>
         {!auth && <button className='hover:text-gray-900 transition-all ease-in-out duration-300 bg-slate-200 text-gray-700 rounded-md p-2 ' onClick={()=>setReg(true)}>Register</button>}
        </li>
        <li>
          {auth&&<Link  to={'/profile'} className=' flex gap-4 items-center hover:text-white transition-all ease-in-out duration-300'><img src={user} alt=""  className='rounded-full object-cover w-16 h-16 ring-2 ring-white ' /></Link>}
        </li>
      </ul>
      <div className="relative">
      <button className='hover:ring-2 hover:ring-white rounded-md p-2 duration-300 ease-in-out focus:ring-2 focus:ring-white lg:hidden relative'><MdMenu className='text-2xl' onClick={()=>setMenu(!showMenu)}/></button>

      {showMenu && <div className=" absolute bg-white shadow-md right-5 top-10 rounded-md text-slate-600 w-36 flex flex-col">
        {!auth&&<button onClick={()=>setLogin(true)} className='hover:text-black  font-semibold  p-2 border-2 border-slate-700/50 rounded-t-md w-full'>Login</button>}
        {!auth&&<button onClick={()=>setReg(true)} className='hover:text-black  font-semibold  p-2 border-[1px] border-slate-700/50 w-full'>Register</button>}
        {auth&&<Link to={'/profile'} className='hover:text-black  font-semibold  p-2 border-[1px] border-slate-700/50 w-full text-center'>Profile</Link>}
      </div>}
      </div>
      {showLogin && <Login setClose={setLogin}/>}
      {showReg &&   <Register setClose={setReg}/> }
   
      </div>
    
    </>
  )
}
