const initialstate = {
  isLoggedIn: false
}

export default function reducerAuth(state = initialstate, action) {
  switch (action.type) {
    case 'loggedIn': {
      return Object.assign({}, state, { isLoggedIn: true })
    }
    case 'loggedOut': {
      return Object.assign({}, state, { isLoggedIn: false })
    }

    default: {
      return state
    }
  }
}
