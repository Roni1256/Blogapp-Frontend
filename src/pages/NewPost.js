import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const inputField='px-6 py-2 text-lg font-semibold ring-2 ring-gray-600 rounded-lg outline-none focus:ring-3 focus:ring-black bg-white w-full tracking-wide bg-gray-100'

export const NewPost = () => {
  return (
    <>
    <div className="w-full p-10  pt-44 flex flex-col items-center justify-center">
        <header>
            <h1 className='text-2xl text-slate-700 font-bold'>Create Your Post ! Share Your Knowledge!</h1>
            <span className='text-md font-bold text-slate-500'>12-May-2024</span>
        </header>

        <form action="submit" className='lg:grid lg:grid-cols-2  lg:gap-12 py-4 flex flex-col gap-4 items-center lg:items-start  justify-center'>
            <div className="flex flex-col gap-4  items-center justify-start w-full">
              <input type="text" placeholder='Title' className={inputField} />
              <input type="text" placeholder='Descriptions' className={inputField} />
              <input type="text" placeholder='Tags' className={inputField} />

              <input type="file" name="Upload Image" id="" />
            </div>
        
                
                <div className=" w-full rounded-lg">
                    <ReactQuill theme="snow" className=''/>
                </div>
                <button className='text-white bg-slate-900 w-fit text-xl font-bold  rounded-lg px-5 py-2 hover:scale-[1.1] ease-in-out  transition-all duration-300'>Post</button>
          
        </form>

    </div>
    </>
  )
}
