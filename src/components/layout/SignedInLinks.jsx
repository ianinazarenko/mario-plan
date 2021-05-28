import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from 'store/actions/authActions'

function SignedInLinks() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.firebase.profile)

  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={() => dispatch(signOut())}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks
