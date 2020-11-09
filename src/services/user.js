import Cookies from 'js-cookie'

const key = 'token'

function logIn(token) {
  Cookies.set(key, token)
}

function logOut() {
  Cookies.remove(key)
}

function getToken() {
  return Cookies.get(key)
}

function isLogin() {
  return !!getToken()
}

export default {
  logIn,
  logOut,
  getToken,
  isLogin
}
