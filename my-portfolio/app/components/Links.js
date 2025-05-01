import React from 'react'

function Links({content}) {
  
  return (
    <div className='flex justify-center items-center bg-white w-full h-17 transition-transform hover:scale-102 rounded-lg drop-shadow-xl my-3 hover:shadow-lg '>
      <h1 className='text-lg'>{content}</h1>
    </div>
  )
}

export default Links
