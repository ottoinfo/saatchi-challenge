import { createSelector } from "reselect"

export const getArtworks = state => state.artworks.items
export const getFavorites = state => state.artworks.favorites
export const getSearch = state => state.artworks.search
export const getIsFetching = state => state.artworks.isFetching
export const getError = state => state.artworks.error

export const searchArtworks = createSelector(
  [getArtworks, getSearch],
  (artworks, search) => {
    if (!search.trim().length) {
      return artworks
    }
    else {
      const words = search.trim().split(/[ ,]+/)
      let regExpString = ""
      words.map(word => (regExpString += `(?=.*${word})`))
      const regEx = new RegExp(regExpString, "ig")
      return artworks.filter(artworks => artworks.artwork_title.match(regEx))
    }
  }
)

export const availableArtworks = createSelector([searchArtworks], artworks => {
  return artworks
})
