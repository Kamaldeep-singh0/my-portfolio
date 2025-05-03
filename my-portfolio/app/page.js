
"use client";
import { useState } from "react";
import Card from "./components/Card";
import Project from "./components/Project";

export default function Home() {


  

  return (
    <div className="bg-black flex justify-center  ">
    <div className="flex flex-col  items-center w-xl  h-screen my-5">
     <Card/>
     <div className="flex flex-col w-full bg-black rounded-xl border-1 border-zinc-800">
     <Project/>
     <Project/>
     </div>
     
    </div>


    </div>
  );
}
