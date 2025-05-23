import React from 'react'
import { FaMapMarkerAlt, FaGlobe, FaClock, FaCode, FaRobot, FaCogs,FaPaperPlane , FaRegCircle , FaPhone ,FaBriefcase } from 'react-icons/fa';


function Card() {
  return (
    <div className='flex flex-col w-full bg-zinc-950 rounded-xl border-1 border-zinc-800 transform hover:scale-102 transition-transform duration-400 ease-in-out shadow-lg '>
        <div className='flex flex-row justify-baseline h-max '>
           
       <img className="size-32 drop-shadow-xl my-4 rounded-xl transition-transform hover:scale-105 shadow-lg  " alt="Kamaldeep Singh profile" src="mypic.jpg"/>
       
       <div className='mx-6 mt-6 w-full '>
        <div className='flex justify-between'>
            <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-3 flex '> <FaRegCircle className="text-green-500  mr-1" /> Available for work</div>
            <div className='flex items-center'>
            <div className='text-white text-sm p-2 '>Resume</div>
            <a href="/Kamaldeep_Singh.pdf" download="Kamaldeep_Singh.pdf">
            <img src='down.png' className=' size-8 bg-zinc-800 border-1 border-zinc-800 rounded-xl p-1 hover:bg-zinc-700'/>
            </a>
            </div>
            
        </div>
        <h1 className='text-2xl text-white my-2 ml-2 font-bold'>Kamaldeep Singh</h1>
        <h2  className='text-lg text-white ml-2 flex' >I&apos;m a  <span className='ml-1 text-amber-500'> WEB DEVELOPER</span></h2>
        
       </div>
       </div>
       <div className='p-2 mx-2 rounded-xl border-1 border-zinc-800 flex flex-wrap gap-2'>
       <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-4 flex  py-1'>  <FaMapMarkerAlt className="text-amber-500  mr-1" /> India</div>
       <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-4 flex py-1'> <FaGlobe className="text-amber-500  mr-1" />English & Hindi</div>
       <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-4 flex py-1'> <FaClock className="text-amber-500  mr-1" />IST</div>
       <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-4 flex  py-1'> <FaCode className="text-amber-500  mr-1" /> MERN Developer</div>
       <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-4 flex  py-1 '> <FaRobot className="text-amber-500  mr-1" /> AI Engineer</div>
       <div className='text-white rounded-full bg-zinc-900 border-1 border-zinc-800 items-center text-sm px-4 flex  py-1'> <FaCogs className="text-amber-500  mr-1" /> Devops</div>
       </div>
       <div className='grid grid-cols-2 mt-2 mb-1 px-2'>
       <a 
         href="tel:+916283918770"
         target="_blank"
         rel="noopener noreferrer"
         className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-3  rounded-2xl bg-zinc-900 border-1 border-zinc-800 items-center'>
         Call Me  <FaPhone  className="text-amber-500  ml-2" /> </a>
       <a 
         href="mailto:contact@kamaldeepsingh.net"
         target="_blank"
         rel="noopener noreferrer"
         className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-3  rounded-2xl bg-zinc-900 border-1 border-zinc-800 items-center'>
         Mail Me  <FaPaperPlane  className="text-amber-500  ml-2" /> </a>
          </div>
          <div className=' mb-2 px-2'>
             <a 
         href="https://www.fiverr.com/s/WEj2jbR"
         target="_blank"
         rel="noopener noreferrer"
         className='text-lg text-white flex justify-center m-1  hover:bg-green-500 py-3  rounded-2xl bg-green-600 border-1 border-zinc-800 items-center'>
         Hire Me on Fiverr  </a>
          </div>
    </div>
  )
}

export default Card
