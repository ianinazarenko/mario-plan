import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'

export default function ProjectList() {
  const projects = useSelector((state) => state.projects.projects)

  return (
    <div className='project-list section'>
      {projects &&
        projects.map((project) => {
          return <ProjectSummary key={project.id} project={project} />
        })}
    </div>
  )
}
