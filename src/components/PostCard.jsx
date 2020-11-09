import React from 'react'
import { Link } from 'react-router-dom'
import ButtonDelete from './button/ButtonDelete'

export default function PostCard(props) {
  const { post } = props

  return (
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.author}</p>
      <Link className="btn btn-primary" to={`posts/${post.id}`} >Detail</Link>
      <ButtonDelete postId={post.id} />
    </div>
  )
}
