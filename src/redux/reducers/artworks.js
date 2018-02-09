import * as actions from "../actions/artworks"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: [], // ID's of Products
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
  default:
    return state
  }
}
