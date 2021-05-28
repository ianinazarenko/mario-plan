import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    const { isLoaded, isLogged } = this.props
    const links = isLogged ? <SignedInLinks /> : <SignedOutLinks />
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          {isLoaded ? links : 'Loading...'}
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    isLogged: !state.firebase.auth.isEmpty,
    isLoaded: state.firebase.auth.isLoaded,
  }
}

export default connect(mapStateToProps)(Navbar)
