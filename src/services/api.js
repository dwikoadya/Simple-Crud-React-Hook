import Axios from 'axios'
import user from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}`
}

const api = Axios.create(config)


export function registerUser(params) {
  return api.post('/register', params)
}

export function loginUser(params) {
  return api.post('/login', params)
    .then((response) => {
      const { data } = response
      user.logIn(data.accessToken)
      return true
    },
      () => (false)
    )
}

export function createPost(params) {
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${user.getToken()}`
    }
  })
}

export function getPosts() {
  return api.get('/posts', {
    headers: {
      Authorization: `Bearer ${user.getToken()}`
    }
  })
}

export function getPostsById(postId) {
  return api.get(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${user.getToken()}`
    }
  })
}

export function updatePost(postId, data) {
  return api.put(`/posts/${postId}`, data, {
    headers: {
      Authorization: `Bearer ${user.getToken()}`
    }
  })
}

export function deletePost(postId) {
  return api.delete(`/posts/${postId}`)
}
