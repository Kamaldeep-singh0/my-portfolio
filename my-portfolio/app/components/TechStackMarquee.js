import { useState, useEffect } from "react";
import {
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAmazonaws,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiJava,
  SiDocker,
  SiVercel
} from "react-icons/si";

export default function TechStackMarquee() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-pause effect
  useEffect(() => {
    const pauseTimeout = setTimeout(() => {
      setIsPaused(true);
      
      // Resume after 2 seconds
      const resumeTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 2000);
      
      return () => clearTimeout(resumeTimeout);
    }, 3000); // Pause after 3 seconds of loading
    
    return () => clearTimeout(pauseTimeout);
  }, []);
  
  const techs = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Java", icon: SiJava, color: "#007396" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" }
  ];

  const TechBox = ({ tech, index, direction }) => {
    const Icon = tech.icon;
    const isHovered = hoveredTech === `${direction}-${index}`;
    
    return (
      <div
        key={`${direction}-${index}`}
        className={`flex items-center gap-3 justify-center min-w-[140px] h-16 px-4 bg-[#121212] 
                   text-white rounded-lg text-sm font-medium shadow-md transition-all duration-300
                   border border-zinc-800 hover:border-amber-500/50
                   ${isHovered ? "bg-[#1a1a1a] scale-110" : ""}`}
        onMouseEnter={() => setHoveredTech(`${direction}-${index}`)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        {Icon && 
          <Icon 
            className={`transition-transform duration-400 ease-in-out ${isHovered ? "text-3xl text-amber-500" : "text-3xl"}`} 
            style={{ color: isHovered ? "#FF9800" : tech.color }} 
          />
        }
        <span className={`${isHovered ? "text-amber-500" : "text-gray-100"}`}>
          {tech.name}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full bg-black rounded-xl border border-zinc-800 items-center relative overflow-hidden py-8">
      <div className="text-white text-2xl font-bold mb-6">
        <span className="text-gray-300">Technical</span> <span className="text-amber-500">Skills</span>
      </div>
      
    
      <div className="relative w-full overflow-hidden group mb-6">
        <div 
          className={`flex gap-6 animate-scroll-left whitespace-nowrap ${isPaused || hoveredTech ? "[animation-play-state:paused]" : ""}`}
        >
          {[...techs, ...techs].map((tech, i) => (
            <TechBox tech={tech} index={i} direction="ltr" key={`ltr-${i}`} />
          ))}
        </div>
      </div>
      
     
      <div className="relative w-full overflow-hidden group">
        <div 
          className={`flex gap-6 animate-scroll-right whitespace-nowrap ${isPaused || hoveredTech ? "[animation-play-state:paused]" : ""}`}
        >
          {[...techs.slice().reverse(), ...techs.slice().reverse()].map((tech, i) => (
            <TechBox tech={tech} index={i} direction="rtl" key={`rtl-${i}`} />
          ))}
        </div>
      </div>
      
   
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent" />
      </div>
      
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
}