import React from 'react'
import { 
    FaLinkedin, 
    FaGithub, 
    FaTwitter, 
    FaLink 
  } from "react-icons/fa";
  import { SiLeetcode } from "react-icons/si";

function Presence() {
  return (
    <div className="flex flex-col w-full bg-zinc-950 rounded-xl border-1 border-zinc-800 items-center">
      <div className="text-white text-xl font-bold m-2">Online Presence</div>
      <div className="grid grid-cols-4 gap-1 lg:gap-8 my-3 mb-6">
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800  text-white'><FaGithub  className="text-zinc-500 mr-1  size-6 " />Github</button>
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'><FaLinkedin  className="text-zinc-500 mr-1 size-6 " />Linkedin</button>
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'><FaTwitter  className="text-zinc-500 mr-1  size-6 " />X</button>
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'><SiLeetcode  className="text-zinc-500 mr-1 size-6 " />Leetcode</button>

      </div>

      </div>
  )
}

export default Presence
