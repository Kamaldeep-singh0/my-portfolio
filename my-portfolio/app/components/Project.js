import React from 'react'
import { FaBroadcastTower,FaExternalLinkAlt  } from "react-icons/fa";

function Project({name,descrip , image,code,live}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 m-2 w-full bg-zinc-950 rounded-xl border-1 border-zinc-800 transform hover:scale-102 transition-transform duration-400 ease-in-out shadow-lg '>
     <div className='flex flex-col items-center '>
      <h1 className='text-white text-lg text-center my-3'>{name}</h1>
      <img src={image} alt="p1" className='h-40 w-72  '/>
      </div>
      <div className='mx-4 my-2'>
        
        <h2 className='text-white text-sm '>{descrip}</h2>
        <a 
         href={code}
         target="_blank"
         rel="noopener noreferrer"
         className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-2 mt-3 rounded-xl bg-zinc-900 border-1 border-zinc-800 items-center'
          ><FaExternalLinkAlt  className="text-amber-500 mr-2" />Code</a>
        <a  
        href={live}
        target="_blank"
        rel="noopener noreferrer" 
        className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-2 mt-3  rounded-xl bg-zinc-900 border-1 border-zinc-800 items-center'
        ><FaBroadcastTower  className="text-amber-500  mr-2 " />Live</a>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Project
