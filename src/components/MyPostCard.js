import React from 'react'

export const MyPostCard = () => {
  return (
    <>
    <div className="w-fit h-40 bg-white shadow-sm shadow-black rounded-md p-3 text-slate-600 flex flex-col items-center justify-center gap-4">
        <h1 className='text-xl font-bold '>Lorem ipsum dolor sit amet consectetur ?</h1>
        <span className='text-lg font-bold text-slate-400'>12-May-2024</span>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" >
                Read more
        </button>
    </div>
    </>
  )
}
