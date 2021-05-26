import React from 'react'
import { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

export default class ProjectList extends Component {
  render() {
    return (
      <div className='project-list section'>
        {this.props.projects &&
          this.props.projects.map((project) => {
            return (
              <Link to={'/project-' + project.id}>
                <ProjectSummary key={project.id} project={project} />
              </Link>
            )
          })}
      </div>
    )
  }
}
