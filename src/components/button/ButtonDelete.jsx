import React from 'react'
import { useHistory } from 'react-router-dom'
import { deletePost } from '../../services/api'

export default function ButtonDelete(props) {
  const { postId } = props
  const history = useHistory()

  function handleDelete() {
    deletePost(postId).then(
      () => history.push('/posts')
    )
  }

  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
  )
}
