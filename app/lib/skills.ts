import { StaticImageData } from "next/image"

import pythonLogo from "@/app/assets/svg/python-logo.svg"

export interface Skill {
  text: string
  logo: StaticImageData
}

const skills: Skill[] = [
  {
    text: "Python",
    logo: pythonLogo
  },
  {
    text: "Django",
    logo: pythonLogo
  },
  {
    text: "Nginx",
    logo: pythonLogo
  },
  {
    text: "Really long technology",
    logo: pythonLogo
  },
  {
    text: "Double word",
    logo: pythonLogo
  }
] as const

export default skills