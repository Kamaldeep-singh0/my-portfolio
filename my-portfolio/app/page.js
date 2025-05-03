
"use client";
import { useState } from "react";
import Card from "./components/Card";
import Project from "./components/Project";
import Presence from "./components/Presence";
import TechStackMarquee from "./components/TechStackMarquee";
import Aboutus from "./components/Aboutus";

export default function Home() {


  

  return (
    <div className="bg-black min-h-screen w-full flex justify-center   ">
      <link rel="icon" href="mypic.png" sizes="any"  />
      <meta name="description" content="This is a description of my page." />
    <div className="flex flex-col items-center w-full max-w-2xl my-5">
     <Card/>
     <div className="flex flex-col w-full bg-black rounded-xl border-1 border-zinc-800 items-center">
      <div className="text-white text-xl font-bold my-5">Projects</div>
     <Project/>
     <Project/>
     <Project/>
     </div>

    <Presence/>
    <TechStackMarquee/>
    <Aboutus/>
     
    </div>


    </div>
  );
}
