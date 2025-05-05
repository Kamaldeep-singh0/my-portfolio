"use client";
import dynamic from "next/dynamic";

const TechStackMarquee = dynamic(() => import("./TechStackMarquee"), {
  ssr: false,
});

export default function TechStackMarqueeWrapper() {
  return <TechStackMarquee />;
}