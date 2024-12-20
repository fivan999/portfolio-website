import React from 'react'
import ProjectCard from '../projectcard'

import allProjects from "@/app/lib/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-10">
      <h3 className='text-center header'>Мои проекты</h3>
      <div className="bg-green-400 h-96 w-96">
        hello
        {allProjects.map(props => <ProjectCard key={props.title} {...props}/>)}
      </div>
    </section>
  )
}
