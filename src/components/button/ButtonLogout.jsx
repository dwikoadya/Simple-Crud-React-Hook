import React from 'react'
import { useDispatch } from 'react-redux'

export default function ButtonLogOut() {
  const dispatch = useDispatch()

  function handleLogOut() {
    dispatch({ type: 'loggedOut' })
  }
  return (
    <button type="button" onClick={handleLogOut}>Log Out</button>
  )
}
