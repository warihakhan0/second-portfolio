import React from 'react'
import { Button } from '@/components/ui/button'
import Project from '../components/project'
import furni from "../(public)/furniture.jpeg"
import clothing from "../(public)/malefashion-free-template.jpg"
import resume from "../(public)/right-resume-screenshot-768x576.png"
const Portfolio = () => {
  return (
    <div>
     <div className='flex md:flex-row flex-col justify-between mt-5'>
     <div>
        <h5 className='font-bold text-3xl ml-5'>Recent Projects</h5>
        <h1 className='ml-5 text-sm font-semibold'>My Portfolio</h1>
      </div>
      <Button variant={"destructive"} className='mr-5 animate-bounce'><a href="https://www.linkedin.com/in/wariha-ayoob-khan-5467b5279/" target='_blank'>Visit My LinkedIn </a></Button>
     </div>
      {/* projects */}
      <div className='flex lg:flex-row flex-col place-items-center justify-center gap-10 m-5'>
        <Project head='Furniture Website' descript='Crafted with Next.js and styled using Tailwind CSS, our website offers a seamless, responsive shopping experience. Browse through a wide selection of high-quality, modern furniture that fits your home&apos;s aesthetic.'
        link= "https://final-hackathon-black.vercel.app/"
        image={furni}/>
         <Project head='Clothing website' descript='Crafted with Next.js and styled using Tailwind CSS, our website offers a seamless, responsive shopping experience. Browse through a wide selection of high-quality clothes that fits you.'
        link= "https://pixels-perfect-seven.vercel.app/"
        image={clothing}/>
        <Project head='Resume Builder' descript='Crafted with typescript using great logics and user friendly interface.Created great logics where poeple enter their details and get their resume with print and downloading functionality.'
        link= "https://milestone-5-ten-jade.vercel.app/"
        image={resume}/>
      </div>
    </div>
  )
}

export default Portfolio