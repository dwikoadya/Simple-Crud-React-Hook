import React, { Fragment, useState, useEffect } from 'react'

import Card from '../components/Card'
import PostCard from '../components/PostCard'
import { getPosts } from '../services/api'

export default function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(
      (response) => setPosts(response.data)
    )
  }, [])

  return (
    <Fragment>
      <Card title="List Post">
        {
          posts.length > 0 && posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        }
        {
          posts.length < 0 && (<p>Data Kosong</p>)
        }
      </Card>
    </Fragment>
  )
}
