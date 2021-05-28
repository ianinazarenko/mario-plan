import React from 'react'
import { useParams } from 'react-router'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import moment from 'moment'

function ProjectDetails() {
  const { id } = useParams()

  useFirestoreConnect({
    collection: 'projects',
    doc: id,
  })

  const project = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[id]
  )

  console.log('render')

  if (!project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <h3>Loading...</h3>
        </div>
      </div>
    )
  }

  const { title, content, authorFirstName, authorLastName, createdAt } = project

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by {authorFirstName} {authorLastName}
          </div>
          <div>{moment(createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
