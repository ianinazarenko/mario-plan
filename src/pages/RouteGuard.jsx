import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function RouteGuard({ children, ...rest }) {
  const isLogged = !useSelector((state) => state.firebase.auth.isEmpty)
  const route = isLogged ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to='/signin' />
  )

  return route

  // return (
  //   <Route
  //     {...rest}
  //     render={() => (isLogged ? children : <Redirect to='/signin' />)}
  //   />
  // )
}

export default RouteGuard
