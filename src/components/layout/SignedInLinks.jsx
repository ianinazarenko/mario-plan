import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from 'store/actions/authActions'

function SignedInLinks() {
  const dispatch = useDispatch()

  return (
    <ul className='right'>
      <li>
        <NavLink to='/create-project'>New Project</NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={() => dispatch(signOut())}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          NN
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks
