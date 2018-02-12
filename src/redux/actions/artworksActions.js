import * as actionTypes from './actionTypes';

export const fetchItems = () => {
  return dispatch => {
    // Kick off the loading cycle
    dispatch(fetchStart())

    fetch('../../../api/data.json').then(resp => {
      return resp.json().then(resp => {
        // Dispatch success when api call is done
        dispatch(fetchSuccess(resp))
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH.START
  }
}

export const fetchSuccess = items => {
  return {
    type: actionTypes.FETCH.SUCCESS,
    items: items
  }
}

export const searchItems = input => {
  const searchVal = input.target.value.toLowerCase()

  return {
    type: actionTypes.UPDATE_SEARCH,
    search: searchVal
  }
}

export const toggleFav = itemId => {
  return {
    type: actionTypes.TOGGLE_FAV,
    itemId: itemId
  }
}
