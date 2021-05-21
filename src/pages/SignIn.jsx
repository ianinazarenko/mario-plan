import React, { Component } from 'react'

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
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
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.onChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.onChange} />
          </div>
          <div className='input-field'>
            <button type='submit' className='btn pink lighten-1 z-depth-0'>
              Log In
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
