import { connect } from "react-redux"

import ArtworksList from "../components/ArtworksList"
import {
  availableArtworks,
  getFavorites,
  getIsFetching,
  getError,
} from "../redux/selectors/artworks"
import { fetchArtworks, favoriteToggle } from "../redux/actions/artworks"

const mapStateToProps = state => ({
  artworks: availableArtworks(state),
  favorites: getFavorites(state),
  isFetching: getIsFetching(state),
  error: getError(state),
})
const mapDispatchToProps = dispatch => ({
  fetchArtworks: () => fetchArtworks(dispatch),
  favoriteToggle: id => favoriteToggle(id, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
