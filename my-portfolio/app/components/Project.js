import React from 'react'

function Project() {
  return (
    <div className='grid grid-cols-2 m-2 w-full bg-zinc-950 rounded-xl border-1 border-zinc-800 transform hover:scale-102 transition-transform duration-400 ease-in-out shadow-lg '>
     <div className='flex flex-col '>
      <h1 className='text-white text-lg text-center my-2'>VedX - AI Search Engine</h1>
      <img src='pro.jpg' className='h-40 w-72  '/>
      </div>
      <div className='m-2'>
        
        <h2 className='text-white text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh</h2>
        <div className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-2 mt-3 rounded-xl bg-zinc-900 border-1 border-zinc-800'>Mail Me</div>
        <div className='text-lg text-white flex justify-center m-1  hover:bg-zinc-800 py-2 mt-3  rounded-xl bg-zinc-900 border-1 border-zinc-800'>Mail Me</div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Project
