import React, { PureComponent } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
  }
  p {
    font-style: italic;
  }
`

export default class ArtworksList extends PureComponent {
  componentWillMount() {
    const { artworks, fetchArtworks } = this.props
    if (!artworks || !artworks.length) {
      fetchArtworks()
    }
  }

  render() {
    const { artworks, isFetching } = this.props

    if (isFetching) {
      return (
        <div>
          <img src="https://loading.io/spinners/zigzag/lg.zigzag-curve-preloader.gif" />
        </div>
      )
    }

    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <p>Load Artwork and display</p>
      </Wrapper>
    )
  }
}
