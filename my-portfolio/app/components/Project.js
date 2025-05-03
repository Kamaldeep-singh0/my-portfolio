import React from 'react'
import { FaBroadcastTower,FaExternalLinkAlt  } from "react-icons/fa";

function Project() {
  return (
    <div className='grid grid-cols-2 m-2 w-full bg-zinc-950 rounded-xl border-1 border-zinc-800 transform hover:scale-102 transition-transform duration-400 ease-in-out shadow-lg '>
     <div className='flex flex-col '>
      <h1 className='text-white text-lg text-center my-2'>VedX - AI Search Engine</h1>
      <img src='pro.jpg' className='h-40 w-72 ml-4 '/>
      </div>
      <div className='m-2'>
        
        <h2 className='text-white text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, wh</h2>
        <div className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-2 mt-3 rounded-xl bg-zinc-900 border-1 border-zinc-800 flex'><FaExternalLinkAlt  className="text-amber-500 mt-2 mr-2 size-3.5" />Code</div>
        <div className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-2 mt-3  rounded-xl bg-zinc-900 border-1 border-zinc-800 flex'><FaBroadcastTower  className="text-amber-500 mt-1 mr-2 " />Live</div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Project
