import { connect } from "react-redux"

import ArtworksList from "../components/Search"
import { updateSearch } from "../redux/actions/artworks"

const mapStateToProps = state => ({
  search: state.artworks.search,
})
const mapDispatchToProps = dispatch => ({
  updateSearch: search => updateSearch(search, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
