import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { ProjectInterface } from '../lib/projects'
import Link from 'next/link'

export default function ProjectCard(props: ProjectInterface) {
  return (
    <Link href={props.url} target="_blank">
      <div className="w-[435px] rounded-2xl hover:scale-110 hover:border-[5px] hover:mb-[-7px] duration-500 border-blue-300 transition-transform text-base p-2 overflow-hidden bg-gray-200 jetbrains">
          <Image className="rounded-2xl shadow-inner" src={props.imageURL} height={233} quality={100} alt="project-image"/>
          <h4 className="text-black font-bold">{props.title}</h4>
          <ul className="text-white flex gap-3">
            {props.tags.map(text => <li key={text} className="py-1 px-4 bg-red-300 rounded-lg">{text}</li>)}
          </ul>
      </div>
    </Link>
  )
}
