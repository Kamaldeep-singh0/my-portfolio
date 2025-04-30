import Image from "next/image";
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="flex justify-center "> 
    <div className="flex flex-col items-center text-3xl font-bold  underline bg-amber-700 w-xl  h-screen my-8">
   <img className="size-32 my-4 rounded-full" src="mypic.png"/>
   <h1 className="text-xl font-bold ">@Kamaldeep_Singh</h1>
   <Links/>
    </div>
    </div>
   
  );
}
