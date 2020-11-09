import React, { useState } from 'react'

export default function Password(props) {
  const [show, setShow] = useState(false)
  const { id, label, name, inputRef } = props

  return (
    <div className="form-group">
      <label htmlFor={id}> {label} </label>
      <div className="input-group mb-3">
        <input className="form-control" name={name} id={id} ref={inputRef} type={(show) ? 'text' : 'password'} />
        <div className="input-group-append">
          <button onClick={() => setShow(!show)} type="button" className="btn btn-primary">
            {
              (show) ? <i className="fa fa-eye-slash" /> : <i className="fa fa-eye" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}
