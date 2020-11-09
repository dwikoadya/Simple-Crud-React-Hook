import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function RedirectHome({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <Fragment>
      {isLoggedIn ? children : (<Redirect to="/login" />)}
    </Fragment>
  )
}
