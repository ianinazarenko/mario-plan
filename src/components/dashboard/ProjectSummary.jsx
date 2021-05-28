import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

class ProjectSummary extends Component {
  render() {
    const { firstName, lastName } = this.props.profile
    const { title, createdAt } = this.props.project

    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{title}</span>
          <p>
            Posted by {firstName} {lastName}
          </p>
          <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.firebase.profile,
  }
}

export default connect(stateToProps)(ProjectSummary)
