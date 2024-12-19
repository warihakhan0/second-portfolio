import React from 'react'
import { Button } from '@/components/ui/button'
const Footer = () => {
  return (
    <div className='bg-[#d1f3ffcc] flex flex-row justify-between p-4'>
      <div>
      <p className='text-sm text-gray-850 font-semibold mb-4'>Made by Wariha Khan</p>
      <Button variant={"destructive"}><a href="https://www.linkedin.com/in/wariha-ayoob-khan-5467b5279/" target='_blank'>Linked In</a></Button>
      </div>
<div className='flex flex-row text-[12px] gap-7'>
<p>Privacy Policy</p>
      <p>Terms of Service</p>
      <p>Cookies Settings</p>
</div>
    </div>
  )
}

export default Footer