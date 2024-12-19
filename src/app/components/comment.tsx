import React from 'react'
interface comment{
  head:string,
  comment:string
}
const Comment = ({head,comment}:comment) => {
  return (
    <div className='md:w-1/4 w-2/4 border-blue-900 my-5 border-[1.5px] p-2'>
      <h4 className='font-semibold text-sm'>
        <em>{head}</em>
        </h4>
      <p className='text-[12px] mt-4'>{comment}</p>
    </div>
  )
}

export default Comment