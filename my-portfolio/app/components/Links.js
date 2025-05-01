import React from 'react'

function Links({content,web,action}) {

  
  return (
    <a href={web} target="_blank" className='px-5 flex justify-between items-center bg-white w-full h-17 transition-transform hover:scale-102 rounded-lg drop-shadow-xl my-3 hover:shadow-lg '>
      <img className="size-15" src={action}/>
      <h1 className='text-lg'>{content}</h1>
      <img className="size-10 hover:shadow-lg rounded-full" src='3dot.png'/>
    </a>
    
  )
}

export default Links
