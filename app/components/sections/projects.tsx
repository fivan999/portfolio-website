import React from 'react'
import ProjectCard from '../projectcard'

import allProjects from "@/app/lib/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-10">
      <h3 className='text-center header'>Мои проекты</h3>
      <div className="grid gap-x-4 gap-y-5 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_435px))] mt-10">
        {allProjects.map(props => <ProjectCard key={props.title} {...props}/>)}
      </div>
    </section>
  )
}
