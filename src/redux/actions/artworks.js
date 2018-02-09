// CONSTANTS
export const FETCH_START = "@artworks.FETCH.START"
export const FETCH_SUCCESS = "@artworks.FETCH.SUCCESS"
export const FETCH_FAILURE = "@artworks.FETCH.FAILURE"
export const UPDATE_SEARCH = "@artworks.UPDATE_SEARCH"
export const FAVORITE_TOGGLE = "@artworks.FAVORITE_TOGGLE"
export const FETCH_LOCAL = "@artworks.FETCH_LOCAL"

export const actions = {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE_SEARCH,
  FAVORITE_TOGGLE,
  FETCH_LOCAL,
}

// ACTIONS
export function fetchArtworks(dispatch) {
  dispatch({ type: FETCH_START })
  dispatch({ type: FETCH_LOCAL })

  setTimeout(
    () =>
      fetch("/api/data.json")
        .then(response => response.json())
        .then(data => {
          return dispatch({
            type: FETCH_SUCCESS,
            payload: data,
          })
        })
        .catch(error => {
          console.log(error)
          return dispatch({ type: FETCH_FAILURE, payload: error })
        }),
    3000
  )
}

export function updateSearch(search, dispatch) {
  return dispatch({ type: UPDATE_SEARCH, payload: search })
}

export function favoriteToggle(id, dispatch) {
  console.log(id)
  return dispatch({ type: FAVORITE_TOGGLE, payload: id })
}
