import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import PostList from '../screens/PostList'
import PostDetail from '../screens/PostDetail'
import NavigationHelper from './helper/NavigationHelper'
import RedirectHome from './helper/RedirectHome'
import RedirectLogin from './helper/RedirectLogin'

export default function Base() {
  return (
    <Router>
      <NavigationHelper />
      <Switch>
        <Route exact path="/">
          <RedirectHome>
            <Home />
          </RedirectHome>
        </Route>
        <Route path="/login">
          <RedirectLogin>
            <Login />
          </RedirectLogin>
        </Route>
        <Route path="/register">
          <RedirectLogin>
            <Register />
          </RedirectLogin>
        </Route>
        <Route exact path="/posts">
          <RedirectHome>
            <PostList />
          </RedirectHome>
        </Route>
        <Route exact path="/posts/:postId">
          <RedirectHome>
            <PostDetail />
          </RedirectHome>
        </Route>
      </Switch>
    </Router>
  )
}
