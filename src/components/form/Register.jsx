import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import Text from '../input/Text'
import Password from '../input/Password'
import Card from '../Card'
import { registerUser } from '../../services/api'

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required()
})

export default function RegisterForm() {
  const { register, handleSubmit } = useForm({
    resolver: joiResolver(schema)
  })

  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col align-self-center">
          <Card title="Register">
            <form onSubmit={handleSubmit(registerUser)}>
              <Text label="Email" name="email" id="email" inputRef={register} />
              <Password label="Password" name="password" id="password" inputRef={register} />
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
