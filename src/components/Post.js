import React from 'react'
import samplepic from '../assets/pic.jpg'
import { FaAngleRight } from "react-icons/fa";

export const Post = () => {
  return (
    <>

  <div className=" flex w-full max-w-[48rem] flex-col md:flex-row  rounded-xl bg-white  text-gray-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
    <div className=" m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Lorem ipsum dolor sit amet consectetur adipisicing elit?
      </h4>
      <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo fugit ad, placeat nesciunt, aliquam ut quibusdam doloremque mollitia rerum dolores ex voluptas laboriosam nobis doloribus molestiae tempore qui repellat?
      </p>
      <a className="inline-block" href="#">
        <button
          className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Learn More<FaAngleRight />
        </button>
      </a>
    </div>
  </div>


    </>
  )
}
