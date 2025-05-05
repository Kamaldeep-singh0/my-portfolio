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
    <div className="flex flex-col w-full bg-zinc-950 rounded-xl border-1 border-zinc-800 items-center transform hover:scale-102 transition-transform duration-400 ease-in-out">
      <div className="text-white text-xl font-bold my-5">
        Connect
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 mb-8 ">
        <a  
        href="https://github.com/Kamaldeep-singh0/"
        target="_blank"
        rel="noopener noreferrer" 
        className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800  text-white'
        ><FaGithub  className="text-zinc-500 mr-1  size-6 " />Github</a>
        <a 
        href="https://www.linkedin.com/in/kamaldeepsingh0/"
        target="_blank"
        rel="noopener noreferrer" 
        className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'
        ><FaLinkedin  className="text-zinc-500 mr-1 size-6 " />Linkedin</a>
         <a 
        href="https://leetcode.com/u/kamaldeep_ss/"
        target="_blank"
        rel="noopener noreferrer" 
        className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'
        ><SiLeetcode  className="text-zinc-500 mr-1 size-6 " />Leetcode</a>
        <a 
        href="https://x.com/Kamaldeep_ss/"
        target="_blank"
        rel="noopener noreferrer" 
        className='border-1 border-zinc-800 p-4 flex justify-center rounded-xl hover:bg-zinc-800 text-white'
        ><FaTwitter  className="text-zinc-500 mr-1  size-6 " />X</a>
       

      </div>

      </div>
  )
}

export default Presence
