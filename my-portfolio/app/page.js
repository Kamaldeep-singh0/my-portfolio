
"use client";
import { useState } from "react";
import Card from "./components/Card";
import Project from "./components/Project";

export default function Home() {


  

  return (
    <div className="bg-black min-h-screen w-full flex justify-center   ">
    <div className="flex flex-col items-center w-full max-w-2xl my-5">
     <Card/>
     <div className="flex flex-col w-full bg-black rounded-xl border-1 border-zinc-800 items-center">
      <div className="text-white text-xl font-bold m-2">Projects</div>
     <Project/>
     <Project/>
     <Project/>
    
     </div>
     
    </div>


    </div>
  );
}
