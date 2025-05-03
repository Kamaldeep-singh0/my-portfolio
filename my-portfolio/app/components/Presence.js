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
      <div className="text-white text-xl font-bold my-5">
        Connect
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 mb-8 ">
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800  text-white'><FaGithub  className="text-zinc-500 mr-1  size-6 " />Github</button>
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'><FaLinkedin  className="text-zinc-500 mr-1 size-6 " />Linkedin</button>
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'><FaTwitter  className="text-zinc-500 mr-1  size-6 " />X</button>
        <button className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'><SiLeetcode  className="text-zinc-500 mr-1 size-6 " />Leetcode</button>

      </div>

      </div>
  )
}

export default Presence
