"use client";
import Card from "./components/Card";
import Project from "./components/Project";
import Presence from "./components/Presence";
import Aboutus from "./components/Aboutus";
import TechStackMarquee from "./components/TechStackMarquee";
import Script from 'next/script';


export default function Home() {

  return (
    <>
     <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'EAB7Ts7NRFhABO2VLPhrsxdLnVoUNUbD1BZB07LRLNdJf8nSa3cRtRcMV5youlOddYmScwKqvwl3Bu5K1Qdre04sfplIrZAwwayVRoaEFPa15PwlWpbmL4NmJIg0Ob9ouAFAtfBEsl4hOLdOyiHKpkQZBngi3vKySaoZB4InspSGaF3X8dTOGYZCMnrEst1AlGUAZDZD'); 
          fbq('track', 'PageView');
        `}
      </Script>

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
      descrip="Medium Project is a full-stack web application built with modern technologies including React for the frontend, Cloudflare Workers with Hono for backend API routing, and PostgreSQL managed via Prisma. It ensures type safety using TypeScript, validation with Zod, and secure authentication through JWT." 
      image="medium.png"
      code="https://github.com/Kamaldeep-singh0/medium-project "
      live="https://medium-project-nine.vercel.app/signup" />
     <Project
      name="Profolio -Project Showcasing"
      descrip="ProjectHub is a responsive web platform where developers can securely sign up and showcase their projects. It features user authentication, dynamic project management, and a sleek UI built with React.js, Tailwind CSS, Express.js, and MongoDB." 
      image="profolio.png"
      code="https://github.com/Kamaldeep-singh0/technovate"
      live="https://github.com/Kamaldeep-singh0/technovate" />
     </div>

    <Presence/>
    <TechStackMarquee/>
    <Aboutus/>
     
    </div>


    </div>
    </>
  );
}
