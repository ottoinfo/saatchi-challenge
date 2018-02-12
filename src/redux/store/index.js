import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import thunkMiddleware from "redux-thunk" // lets us dispatch() functions
import { loadState, saveState } from './storage'

import rootReducer from "../reducers"

export default () => {
  let store
  const persistedState = loadState()

  if (typeof window !== "undefined") {
    store = createStore(
      rootReducer,
      persistedState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  } else {
    store = createStore(rootReducer, persistedState)
  }

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}
