import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import artworks from "./artworksReducers"

export default combineReducers({
  artworks,
  routing: routerReducer
})
