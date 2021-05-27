import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    if (this.props.isLogged) return <Redirect to='/' />

    return (
      <div className='container'>
        <form onSubmit={this.onSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.onChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.onChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' onChange={this.onChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' onChange={this.onChange} />
          </div>
          <div className='input-field'>
            <button type='submit' className='btn pink lighten-1 z-depth-0'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLogged: !state.firebase.auth.isEmpty,
  }
}

export default connect(mapStateToProps)(SignUp)
