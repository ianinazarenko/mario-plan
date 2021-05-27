import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    return (
      <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            MarioPlan
          </Link>
          {this.props.isLogged ? <SignedInLinks /> : <SignedOutLinks />}
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.firebase.auth.isEmpty)
  return {
    isLogged: !state.firebase.auth.isEmpty,
  }
}

export default connect(mapStateToProps)(Navbar)
