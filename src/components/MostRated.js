import React from 'react'
import dummy from '../assets/dummy.jpg'
export const MostRated = () => {
  return (
    <>
    <div className="h-[70vh] lg:h-full mt-10 lg:mt-0 w-full  bg-slate-900 flex justify-center rounded-md  md:col-span-2 object-contain relative overflow-scroll ">
        <span className="bg-white p-2  text-md rounded-md  font-bold absolute top-5 right-5 ">Most Rated</span>
        <div className=" mt-12 text-gray-200 p-3">
          <h1 className='text-2xl font-bold  w-full tracking-wide mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h1>
          <span className='text-slate-500 font-semibold '>17-July-2024</span>
          <p className='text-justify text-md mt-5 p-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cum, sequi sunt, molestias praesentium necessitatibus molestiae cupiditate repellat voluptate exercitationem magni fugit? Velit eos sed corrupti mollitia, ratione facere commodi?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cum, sequi sunt, molestias praesentium necessitatibus molestiae cupiditate repellat voluptate exercitationem magni fugit? Velit eos sed corrupti mollitia, ratione facere commodi?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cum, sequi sunt, molestias praesentium necessitatibus molestiae cupiditate repellat voluptate exercitationem magni fugit? Velit eos sed corrupti mollitia, ratione facere commodi?
          </p>
        </div>

    </div>
    
    </>
  )
}
