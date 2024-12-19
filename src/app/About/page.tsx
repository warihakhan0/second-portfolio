import React from 'react'
import Image from 'next/image'
import myimg from "../(public)/Untitled_design-removebg-preview.png"
const About = () => {
  return (
    <div className='flex md:flex-row flex-col m-5'>
       <Image src={myimg} alt='myimg'/>
       <div>
        <h5 className='font-semibold text-sm'>About</h5>
        <h1 className='font-bold text-4xl'>About Me</h1>
        <p className='text-sm mt-4'>I am a passionate and creative web and graphic designer with a keen eye for detail and a dedication to delivering visually stunning and user-friendly designs. <em className='font-semibold m-2'> With expertise in crafting responsive websites, dynamic user interfaces, and compelling graphic elements such as logos, banners, flyers, and social media assets, I bring ideas to life through innovative design solutions.</em> My approach combines technical proficiency with a strong understanding of branding and aesthetics, ensuring that each project not only looks exceptional but also aligns seamlessly with the client&apos;s goals. Whether it&apos;s building a cohesive brand identity or designing engaging digital experiences, I thrive on turning concepts into impactful visuals that leave a lasting impression. <em className='font-semibold m-2'> With a strong foundation in both web and graphic design, I am driven by a passion for creativity and a commitment to excellence. I specialize in transforming concepts into engaging visuals and seamless digital experiences, ensuring every project reflects a perfect balance of functionality and aesthetic appeal</em>I strive to deliver innovative solutions that not only meet client expectations but exceed them, leaving a lasting impression on their audience</p>
       </div>
    </div>
  )
}

export default About