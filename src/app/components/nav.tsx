import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { PiHamburgerBold } from "react-icons/pi";
const Nav = () => {
  return (
    <div className='flex flex-row justify-between p-10'>
        <div id="logo">
            <Link href={"/"}><h1 className='text-xl font-bold text-[#4324be]'>WK</h1></Link>
            <h6 className='text-sm text-gray-600'>Wariha Khan</h6>
        </div>
<div id="content" className='hidden lg:flex justify-between w-3/4'>
            <ul className='flex flex-row justify-between gap-5 font-semibold'>
               <Link href={"/"} className='hover:text-[#5e3bee]'>Home</Link> 
               <Link href={"/Portfolio"} className='hover:text-[#5e3bee]'>Portfolio</Link> 
               <Link href={"/About"} className='hover:text-[#5e3bee]'>About me</Link> 
               <Link href={"/Testimonails"} className='hover:text-[#5e3bee]'>Testimonials</Link> 
            </ul>
        <div id='button'>
       <Link href={"/Contact"}><Button variant="outline" className='animate-bounce'>Contact Me</Button></Link>
        </div>
</div>
        {/* responiveness */}
        <Sheet>
            <SheetTrigger className='text-4xl lg:hidden flex'>
            <PiHamburgerBold />
            </SheetTrigger>
            <SheetContent>
            <div id="content">
            <ul className='flex flex-col justify-between gap-10 m-5 font-semibold'>
               <Link href={"/"} className='hover:text-[#5e3bee]'>Home</Link> 
               <Link href={"/Portfolio"} className='hover:text-[#5e3bee]'>Portfolio</Link> 
               <Link href={"/About"} className='hover:text-[#5e3bee]'>About me</Link> 
               <Link href={"/Testimonials"} className='hover:text-[#5e3bee]'>Testimonials</Link> 
            </ul>
        <div id='button'>
       <Link href={"/"}> <Button variant="outline">Contact Me</Button></Link>
        </div>
        </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Nav