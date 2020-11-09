import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'
import reducerAuth from './reducerAuth'

const rootReducer = combineReducers({
  auth: reducerAuth,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
)

const persistor = persistStore(store)

export {
  store,
  persistor,
}
