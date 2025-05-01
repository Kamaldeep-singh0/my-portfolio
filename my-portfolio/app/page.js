
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#ebeced] via-[#f5ebe8] to-[#ede1db] flex justify-center "> 
    <div className="flex flex-col items-center text-3xl font-bold  w-xl  h-screen my-8">
   <img className="size-32 drop-shadow-xl my-4 rounded-full transition-transform hover:scale-105 shadow-lg  " src="mypic.png"/>
   <h1 className="text-xl font-bold ">@Kamaldeep_Singh</h1>
   <Links content="Github" action="github.png" web="https://github.com/Kamaldeep-singh0"/>
    <Links content="LeetCode" action="leetcode.png"  web="https://leetcode.com/u/kamaldeep_ss/" />
    <Links content="Linkedin" action="linkdin.png" web="www.linkedin.com/in/kamaldeepsingh0" />
    <Links content="Project 1" action="" web="https://medium-project-nine.vercel.app/signup" />
    <Links content="Send Email" action="gmail.png" web="mailto:sent.kamaldeepsingh@gmail.com"/>
   <Links content="Call me" action="phone.png" web="tel:+916283918770"/>
  
   
  
  
    </div>
    </div>
   
  );
}
