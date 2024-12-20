import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { ProjectInterface } from '../lib/projects'

export default function ProjectCard(props: ProjectInterface) {
  return (
    <div className="w-[435px] p-2 overflow-hidden">
        <Image src={props.imageURL} height={233} alt="project-image"/>
        <h4>{props.title}</h4>
        {props.tags.map(text => <p key={text}>{text}</p>)}
    </div>
  )
}
