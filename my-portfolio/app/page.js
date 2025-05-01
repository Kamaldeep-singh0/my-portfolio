
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#ebeced] via-[#f5ebe8] to-[#ede1db] flex justify-center "> 
    <div className="flex flex-col items-center text-3xl font-bold  underline w-xl  h-screen my-8">
   <img className="size-32 my-4 rounded-full transition-transform hover:scale-105 shadow-lg  " src="mypic.png"/>
   <h1 className="text-xl font-bold  ">@Kamaldeep_Singh</h1>
   <Links content="kamaldeeep"/>
   <Links content="kamaldeeep"/>
   <Links content="kamaldeeep"/>
   <Links content="kamaldeeep"/>
   <Links content="kamaldeeep"/>
    </div>
    </div>
   
  );
}
