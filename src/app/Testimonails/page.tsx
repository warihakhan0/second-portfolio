import React from 'react'
import Comment from '../components/comment'
const Testimonial = () => {
  return (
    <div className='bg-[#f4fbfe] p-5'>
        <div>
           <h5 className='text-sm font-semibold mx-5 mt-5'>Clients Feedback</h5> 
           <h1 className='font-semibold text-2xl mx-5'>Customer testimonials</h1>
        </div>
        <div className='md:flex-row flex-col place-items-center flex gap-4 m-5'>
        <Comment head="Lisa Patel, Entrepreneur" comment='The logo and branding materials designed by Wariha Khan transformed our company&apos;s image. Their creativity and skill are remarkable!'/>
        <Comment head="Sarah Thompson, Marketing Manager" comment='Working with [Your Name] was an absolute pleasure. Their attention to detail and creative vision brought our project to life beyond expectations!'/>
        <Comment head="James Rodriguez, Founder of Creative Solutions" comment='Wariha Khan consistently delivers exceptional work. Their ability to combine technical expertise with stunning design is unmatched.'/>
        <Comment head="Emily Carter, Small Business Owner" comment='I was impressed by Wariha Khan&apos;s professionalism and dedication. They turned our vague ideas into a sleek and functional website.'/>
        <Comment head="Michael Lee, Product Manager" comment='Wariha khan is not only talented but also a great communicator. They ensured that every aspect of the project aligned perfectly with our goals.'/>
        </div>
    </div>
    
  )
}

export default Testimonial 