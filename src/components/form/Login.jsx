import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'


import Text from '../input/Text'
import Password from '../input/Password'
import Card from '../Card'
import { loginUser } from '../../services/api'


const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required()
})

export default function LoginForm() {
  const { register, handleSubmit } = useForm({
    resolver: joiResolver(schema)
  })
  const dispatch = useDispatch()


  function userLogin(data) {
    loginUser(data).then(
      (isLogin) => {
        if (isLogin) {
          dispatch({ type: 'loggedIn' })
        }
      }
    )
  }


  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col align-self-center">
          <Card title="Login">
            <form onSubmit={handleSubmit(userLogin)}>
              <Text label="Email" name="email" id="email" inputRef={register} />
              <Password label="Password" name="password" id="password" inputRef={register} />
              <button type="submit" className="btn btn-primary"> Login </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
