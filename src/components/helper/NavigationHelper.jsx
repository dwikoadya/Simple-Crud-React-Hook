import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ButtonLogOut from '../button/ButtonLogout'

export default function NavigationHelper() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div>
      { isLoggedIn && <Link to='/'> Home </Link>}
      { !isLoggedIn && <Link to='/login'> Login </Link>}
      { !isLoggedIn && <Link to='/register'> Register </Link>}
      { isLoggedIn && <Link to='/posts'> Post List</Link>}
      { isLoggedIn && <ButtonLogOut />}
    </div>
  )
}
