import React from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import  Image  from 'next/image'
interface project{
image:StaticImageData,
head:string,
descript:string,
link:string
}
const Project = ({image,head, descript, link}:project) => {
  return (
    <div className='w-7/12 bg-white p-2 drop-shadow-lg mb-4'>
         <Link href={link} target='_blank'>
        <div>
        <Image src={image} alt={head} />
        </div>
        <h3 className='text-sm font-semibold mt-2'>{head}</h3>
        <p className='text-[10px] mt-2'>{descript}</p>
       </Link>
    </div>
  )
}

export default Project