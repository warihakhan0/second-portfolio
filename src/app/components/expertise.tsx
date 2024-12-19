import React from 'react'
import { PiStrategy } from "react-icons/pi";
import { IoPricetags } from "react-icons/io5";
import { TiPen } from "react-icons/ti";
const Expertise = () => {
  return (
   <div className=''>
     <div className='p-5'>
        <div className='mb-5'>
            <p className='font-semibold text-sm'>My Skills</p>
            <h1 className='font-bold text-3xl'>My Expertise</h1>
        </div>
        {/* items */}
        <div className='flex md:flex-row flex-col  justify-center gap-4 place-items-center'>
        <div className='bg-[#f5fcff] md:w-2/4  p-5 hover:drop-shadow-lg rounded-[7px]'>
        <PiStrategy  className='text-green-800 bg-white rounded-[4px] p-1 text-4xl mb-2'/>
        <h2 className='text-lg font-semibold mb-2'>Strategy & Direction</h2>
        <p className='text-[13px]'>strategy and direction are about creating seamless digital experiences that drive results, empower users, and foster long-term success. It&apos;s a process of constant learning, adapting to new trends, and staying ahead in a competitive industry while never losing sight of the mission</p>
        <h2  className='text-[13px] font-semibold'>Plan thoughtfully, execute diligently, and grow strategically.</h2>
        </div>
        {/* second div */}
        <div className='bg-[#f5fcff] md:w-2/4 p-5 hover:drop-shadow-lg rounded-[7px]'>
        <IoPricetags  className='text-green-800 bg-white rounded-[4px] p-1 text-4xl mb-2'/>
        <h2 className='text-lg font-semibold mb-2'>Branding & Logo</h2>
        <p className='text-[13px]'>From eye-catching flyers to scroll-stopping thumbnails, bold banners to timeless logos—every design is a blend of creativity and purpose. Whether it&apos;s building a brand&apos;s identity or making your message shine, I turn ideas into visuals that inspire, engage, and leave a lasting impression.</p>
        <h2  className='text-[13px] font-semibold'> Your vision, my design—together, we create magic!</h2>
        </div>
        {/* third div */}
        <div className='bg-[#f5fcff] md:w-2/4 p-5 hover:drop-shadow-lg rounded-[7px]'>
        <TiPen  className='text-green-800 bg-white rounded-[4px] p-1 text-4xl mb-2'/>
        <h2 className='text-lg font-semibold mb-2'>UI/UX Design</h2>
        <p className='text-[13px]'>As a UI/UX designer, I create seamless, intuitive, and visually captivating digital experiences that bridge the gap between users and technology. From wireframes to pixel-perfect interfaces, every element is crafted with purpose putting the user at the heart of every design decision.</p>
        <h2  className='text-[13px] font-semibold'>Transforming ideas into engaging journeys, one interface at a time!</h2>
        </div>
        </div>
    </div>
   </div>
  )
}

export default Expertise