
"use client";
import { useState } from "react";
import Links from "./components/Links";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const closeCard = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#ebeced] via-[#f5ebe8] to-[#ede1db] flex justify-center ">

    
        
    <div className="flex flex-col items-center text-3xl font-bold  w-xl  h-screen my-8">
   <img className="size-32 drop-shadow-xl my-4 rounded-full transition-transform hover:scale-105 shadow-lg  " src="mypic.png"/>
   <h1 className="text-xl font-bold ">@Kamaldeep_Singh</h1>
   <Links content="Github" toggle={isCardOpen} setToggle={setIsCardOpen} action="github.png" web="https://github.com/Kamaldeep-singh0"/>
    <Links content="LeetCode" toggle={isCardOpen} setToggle={setIsCardOpen} action="leetcode.png"  web="https://leetcode.com/u/kamaldeep_ss/" />
    <Links content="Linkedin" toggle={isCardOpen} setToggle={setIsCardOpen} action="linkdin.png" web="www.linkedin.com/in/kamaldeepsingh0" />
    <Links content="Project 1" toggle={isCardOpen} setToggle={setIsCardOpen}  action="project.png" web="https://medium-project-nine.vercel.app/signup" />
    <Links content="Send Email" toggle={isCardOpen} setToggle={setIsCardOpen} action="gmail.png" web="mailto:sent.kamaldeepsingh@gmail.com"/>
   <Links content="Call me" toggle={isCardOpen} setToggle={setIsCardOpen} action="phone.png" web="tel:+916283918770"/>
    </div>



  {isCardOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div 
            className="fixed inset-0  bg-opacity-50 transition-opacity "
            onClick={closeCard}
          ></div>
          
          <div className="bg-white shadow-xl p-6 w-full max-w-md m-4 z-10 relative">
          
          </div>
        </div>
      )}



    </div>
   
  );
}
