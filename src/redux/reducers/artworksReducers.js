import * as actions from "../actions/actionTypes"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false // Show/hide loader
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actions.FETCH.START:
      return {
        ...state,
        isLoading: true
      }

    case actions.FETCH.SUCCESS:
      return {
        ...state,
        items: action.items,
        isLoading: false
      }

    case actions.UPDATE_SEARCH:
      return {
        ...state,
        search: action.search
      }

    case actions.TOGGLE_FAV:
      const favs = {...state.favorites},
            itemId = action.itemId

      if (favs[itemId]) {
        delete favs[itemId]
      } else {
        favs[itemId] = itemId
      }

      return {
        ...state,
        favorites: favs
      }

    default:
      return state
  }
}
