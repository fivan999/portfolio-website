import { StaticImageData } from "next/image"
import me from "@/app/assets/img/me.png"

export interface ProjectInterface {
  imageURL: StaticImageData
  title: string,
  tags: string[]
}

const projects: ProjectInterface[] = [
  {
    imageURL: me,
    title: "Test project",
    tags: ["Argument1", "Argument2"],
  }
] as const

export default projects;