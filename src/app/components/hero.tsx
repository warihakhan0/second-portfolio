import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import heroImg from "../(public)/img_war2-removebg-preview.png"
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-36 place-items-center p-10 bg-[#f5fcff]'>
        <div className='md:max-w-[50%]'>
            <h4 className='text-gray-500 text-sm font-semibold'>Hey,I am Wariha khan</h4>
            <h1 className='font-bold text-4xl'>I create <em className='text-[#5e3bee]'>UI/UX Designs</em> </h1>
            <h1 className='font-bold text-4xl'>and <em className='text-[#5e3bee]'>Canva designs</em></h1>
            <p className='text-sm mt-5 mb-5 font-semibold'>Creative and detail-oriented frontend developer and Canva designer with a passion for crafting visually stunning and user-friendly digital experiences. Skilled in modern web technologies and design tools to bring ideas to life with style and functionality.</p>
            <Link href={"/Contact"}><Button variant={"default"} className='animate-bounce'>Get In Touch</Button></Link>
        </div>
        <div className='bg-[#cae0eb] h-[20rem] w-[30rem] place-items-end flex justify-center rounded-[20px] md:mt-20'>
            <Image src={heroImg} height={480} alt='hero-image'/>
        </div>
    </div>
  )
}

export default Hero