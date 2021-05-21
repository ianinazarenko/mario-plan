import React from 'react'
import { useParams } from 'react-router'

function ProjectDetails() {
  const { id } = useParams()

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusantium facere rerum incidunt eum?
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Net Ninja</div>
          <div>2nd, September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
