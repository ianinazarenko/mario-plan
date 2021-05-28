import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from 'store/actions/projectActions'

export class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="materialize-textarea"
              type="text"
              id="content"
              onChange={this.onChange}
            />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
