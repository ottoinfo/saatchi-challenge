import * as actions from "../actions/artworks"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_START:
    return Object.assign({}, state, {
      isFetching: true,
    })
  case actions.FETCH_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      error: "",
      items: action.payload,
    })
  case actions.FETCH_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      error: "Uh oh, something went wrong with the API",
    })
  case actions.UPDATE_SEARCH:
    return Object.assign({}, state, {
      search: action.payload,
    })
  case actions.FAVORITE_TOGGLE:
    const favorites = { ...state.favorites }
    console.log("FAVORITE_TOGGLE", action.payload)
    if (favorites[action.payload]) {
      delete favorites[action.payload]
    }
    else {
      favorites[action.payload] = action.payload
    }
    localStorage.setItem("saatchi-favorites", JSON.stringify(favorites))
    return Object.assign({}, state, {
      favorites,
    })
  case actions.FETCH_LOCAL:
    const local = JSON.parse(localStorage.getItem("saatchi-favorites") || {})
    return Object.assign({}, state, {
      favorites: local,
    })
  default:
    return state
  }
}
