import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import Text from '../input/Text'
import Card from '../Card'
import Button from '../button/Button'
import { createPost } from '../../services/api'

export default function CreatePost() {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  function postCreate(data) {
    createPost(data).then(
      (response) => history.push(`/posts/${response.data.id}`)
    )
  }

  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col align-self-center">
          <Card title="Create Post">
            <form onSubmit={handleSubmit(postCreate)}>
              <Text label="Title" name="title" id="title" inputRef={register} />
              <Text label="Author" name="author" id="author" inputRef={register} />
              <Button label="Create Post" />
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
