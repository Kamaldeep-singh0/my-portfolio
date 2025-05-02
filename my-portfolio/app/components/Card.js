import React from 'react'

function Card() {
  return (
    <div className='flex flex-col w-full bg-zinc-900 rounded-xl border-1 border-zinc-700 '>
        <div className='flex flex-row justify-baseline h-max '>
           
       <img className="size-32 drop-shadow-xl my-4 rounded-full transition-transform hover:scale-105 shadow-lg  " src="mypic.png"/>
       
       <div className='mx-6 mt-6 w-full '>
        <div className='flex justify-between'>
            <div className='text-white rounded-full bg-zinc-800 border-1 border-zinc-700 p-2 text-sm px-4'> 🟢 Available for work</div>
            <div className='flex'>
            <div className='text-white text-sm p-2 '>Resume</div>
            <img src='down.png' className='mt-1 size-8 bg-zinc-800 border-1 border-zinc-700 rounded-xl p-1'/>
            </div>
            
        </div>
        <h1 className='text-2xl text-white my-2 ml-2'>Kamaldeep Singh</h1>
        <h2  className='text-lg text-white ml-2 flex' >I'm a  <span className='ml-1 text-amber-500'> WEB DEVELOPER</span></h2>
        
       </div>
       </div>
       <div className='p-2 mx-2 rounded-xl border-1 border-zinc-700 flex'>
       <div className='text-white rounded-full bg-zinc-800 border-1 border-zinc-700 p-2 text-sm px-4'> India</div>
       <div className='text-white rounded-full bg-zinc-800 border-1 border-zinc-700 p-2 text-sm px-4'> India</div>
       <div className='text-white rounded-full bg-zinc-800 border-1 border-zinc-700 p-2 text-sm px-4'> India</div>
       <div className='text-white rounded-full bg-zinc-800 border-1 border-zinc-700 p-2 text-sm px-4'> India</div>
       </div>
       <div></div>
    </div>
  )
}

export default Card
