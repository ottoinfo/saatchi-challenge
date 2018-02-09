import React, { PureComponent } from "react"
import styled from "styled-components"

import ArtworkItem from "./ArtworkItem"

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

const Loader = styled.div`
  text-align: center;
`

const List = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: repeat(3, 30%);
  grid-column-gap: 5%;
  grid-row-gap: 30px;
`

export default class ArtworksList extends PureComponent {
  componentWillMount() {
    const { artworks, fetchArtworks } = this.props
    if (!artworks || !artworks.length) {
      fetchArtworks()
    }
  }

  render() {
    const {
      artworks,
      favorites,
      isFetching,
      error,
      favoriteToggle,
    } = this.props

    if (error) {
      <p>Error Loading Data...</p>
    }

    if (isFetching) {
      return (
        <Loader>
          <img src="https://loading.io/spinners/zigzag/lg.zigzag-curve-preloader.gif" />
        </Loader>
      )
    }

    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <List>
          {artworks &&
            artworks.map(artwork => (
              <ArtworkItem
                key={artwork.artId}
                {...artwork}
                favorited={favorites[artwork.artId]}
                favoriteArtwork={favoriteToggle}
              />
            ))}
        </List>
      </Wrapper>
    )
  }
}
