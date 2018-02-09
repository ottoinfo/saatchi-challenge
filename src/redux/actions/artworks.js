// CONSTANTS
export const FETCH_START = "@products.FETCH.START"
export const FETCH_SUCCESS = "@products.FETCH.SUCCESS"
export const FETCH_FAILURE = "@products.FETCH.FAILURE"

export const actions = {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

// ACTIONS
export function fetchArtworks(dispatch) {
  dispatch({ type: FETCH_START })

  setTimeout(
    () =>
      fetch("/api/data.json")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          return dispatch({
            type: FETCH_SUCCESS,
            payload: data,
          })
        })
        .catch(error => {
          console.log(error)
          return dispatch({ type: FETCH_FAILURE, payload: error })
        }),
    5000
  )
}
