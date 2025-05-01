
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#ebeced] via-[#f5ebe8] to-[#ede1db] flex justify-center "> 
    <div className="flex flex-col items-center text-3xl font-bold  w-xl  h-screen my-8">
   <img className="size-32 drop-shadow-xl my-4 rounded-full transition-transform hover:scale-105 shadow-lg  " src="mypic.png"/>
   <h1 className="text-xl font-bold ">@Kamaldeep_Singh</h1>
   <Links content="kamaldeeep" action="phone.png" web="https://www.geeksforgeeks.org/how-to-convert-a-div-into-a-link-in-html/"/>
   <Links content="Github" action="github.png" web="https://github.com/Kamaldeep-singh0"/>
   <Links content="kamaldeeep" action="gmail.png" web=""/>
   <Links content="kamaldeeep" action="linkdin.png" web="" />
   <Links content="kamaldeeep" action=""  web="" />
    </div>
    </div>
   
  );
}
