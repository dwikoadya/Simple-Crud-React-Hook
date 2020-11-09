import React from 'react'

export default function Button(props) {
  const { label } = props
  return (
    <button className="btn btn-primary" type="submit"> {label} </button>
  )
}
