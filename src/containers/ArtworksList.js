import { connect } from "react-redux"

import ArtworksList from "../components/ArtworksList"
import { fetchArtworks } from "../redux/actions/artworks"

const mapStateToProps = state => ({
  isFetching: state.artworks.isFetching,
  artworks: state.artworks.items,
})
const mapDispatchToProps = dispatch => ({
  fetchArtworks: () => fetchArtworks(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
