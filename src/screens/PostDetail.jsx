import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import DetailPost from '../components/form/DetailPost'
import { getPostsById } from '../services/api'

export default function PostDetail() {
  const params = useParams()
  const [post, setPost] = useState()
  const { postId } = params

  useEffect(() => {
    getPostsById(postId).then(
      (response) => setPost(response.data),
    )
  }, [postId])

  return (
    <Fragment>
      {
        post && <DetailPost post={post} />
      }
    </Fragment>
  )
}
