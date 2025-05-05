"use client";
import Card from "./components/Card";
import Project from "./components/Project";
import Presence from "./components/Presence";
import Aboutus from "./components/Aboutus";
import TechStackMarquee from "./components/TechStackMarquee";


export default function Home() {

  return (
    <>
    <div className="bg-black min-h-screen w-full flex justify-center   ">
   
    <div className="flex flex-col items-center w-full max-w-2xl my-5">
     <Card/>
     <div className="flex flex-col w-full bg-black rounded-xl border-1 border-zinc-800 items-center">
      <div className="text-white text-xl font-bold my-5">Projects</div>
     <Project
      name="VedX AI search Engine "
      descrip="VedX is an AI-powered chatbot application designed to deliver lightning-fast, accurate, and intelligent responses to user queries.It leverages cutting-edge APIs and a modern web stack to provide a seamless and interactive experience." 
      image="pro.jpg"
      code="https://github.com/Kamaldeep-singh0/vedX "
      live="https://ved-x.vercel.app/" />
     <Project
      name="Medium Project "
      descrip="A full-stack Medium Project built with modern web technologies." 
      image="Medium.png"
      code="https://github.com/Kamaldeep-singh0/medium-project "
      live="https://medium-project-nine.vercel.app/signup" />
     <Project
      name="VedX AI search Engine "
      descrip="hello" 
      image="pro.jpg"
      code="https://github.com/ "
      live="google.com" />
     </div>

    <Presence/>
    <TechStackMarquee/>
    <Aboutus/>
     
    </div>


    </div>
    </>
  );
}
