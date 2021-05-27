import React, { Component } from 'react'
import Notifications from 'components/dashboard/Notifications'
import ProjectList from 'components/dashboard/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={this.props.projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapSateToProps = (state) => {
  if (state.firestore.ordered) {
    return {
      projects: state.firestore.ordered.projects,
    }
  }
  return {
    projects: state.project.projects,
  }
}

export default compose(
  connect(mapSateToProps),
  firestoreConnect(() => ['projects'])
)(Dashboard)
