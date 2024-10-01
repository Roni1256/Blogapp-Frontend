import React from 'react'
import { useLocation } from 'react-router-dom'
import sample from '../assets/pic.jpg'

export const Blog = () => {
  const location = useLocation()
  const heading = location.state?.value
  return (
    <>
      <div className="">
        <div className=''>
          <img src={sample} alt="" className='w-full h-[50vh] object-cover ' />
        </div>
        <div className="flex items-center justify-center ">
        <div className='mt-5 text-slate-800  w-2/3'>
          <header className=' leading-[2]'>
            <h1 className='text-2xl font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis?</h1>
            <h1 className='text-md  font-bold text-slate-600 tracking-wider text-right w-full'>12,july,2024</h1>
            <hr />
          </header>
          <main className='mt-3  text-justify'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, qui nihil ullam eos id veniam dicta reprehenderit nisi pariatur voluptatum aspernatur harum cum labore sed quibusdam ratione expedita minus odio!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae excepturi porro quibusdam dignissimos accusantium repellendus totam, labore quod voluptatibus quisquam pariatur reiciendis at debitis numquam asperiores? Molestiae laudantium ratione quibusdam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae recusandae enim pariatur alias optio dolorum? Autem adipisci blanditiis, est deserunt itaque quo nam saepe. Quaerat quod praesentium exercitationem accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perferendis, ut, laudantium dolore dolor eius soluta eos voluptate incidunt nam asperiores expedita tempore quos natus ab eligendi quod! Quisquam, ipsum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, mollitia? Minus, modi sequi corrupti recusandae, explicabo vitae placeat amet ipsam maxime consequuntur porro architecto. Culpa sed impedit alias quo esse?
              <br /><hr className='my-5' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum nesciunt obcaecati architecto, corporis fugiat ab quasi amet? Minus fugit provident consequuntur unde! Doloremque earum eaque fugit eveniet obcaecati neque!
              <img src={sample} alt="" className='w-full h-1/2 my-5' />
            </p>
          </main>
          <footer>
            
          </footer>
        </div>
        </div>
      
      </div>
    </>
  )
}
