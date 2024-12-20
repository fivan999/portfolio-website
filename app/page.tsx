import Image from "next/image";
import HeroSection from "./components/sections/hero";
import SportSection from "./components/sections/sport";
import ProjectsSection from "./components/sections/projects";

// grid-rows-[20px_1fr_20px]
// font-[family-name:var(--font-geist-mono)]
// bg-black/[.05]

export default function Home() {
  return (
    <>
      <HeroSection/>
      <SportSection/>
      <ProjectsSection/>
    </>
  )
}