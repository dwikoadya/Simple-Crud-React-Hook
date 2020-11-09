import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useHistory } from 'react-router-dom'

import Card from '../Card'
import Text from '../input/Text'
import Button from '../button/Button'
import ButtonDelete from '../button/ButtonDelete'
import { updatePost } from '../../services/api'

export default function DetailPost(props) {
  const params = useParams()
  const history = useHistory()
  const { postId } = params
  const { post } = props
  const { register, handleSubmit } = useForm({
    defaultValues: post
  })

  function handleUpdate(data) {
    updatePost(postId, data).then(
      () => history.push('/posts')
    )
  }

  return (
    <Card title="Form Update">
      <form onSubmit={handleSubmit(handleUpdate)} className="form-group">
        <Text label="Title" name="title" id="title" inputRef={register} />
        <Text label="Author" name="author" id="title" inputRef={register} />
        <Button label="Update Post" />
        <ButtonDelete postId={postId} />
      </form>
    </Card>
  )
}
