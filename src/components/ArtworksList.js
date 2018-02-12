import React, { PureComponent, Fragment } from "react"
import styled from "styled-components"

import ArtworkItem from "./ArtworkItem"
import "../ui/loader.css"

const Wrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
  }

  p {
    font-style: italic;
  }

  .art-list {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    max-width: 1300px;
    margin: 0 auto;
  }
`

const List = styled.div``

export default class ArtworksList extends PureComponent {
  componentDidMount() {
    // Load the artwork items asynchronously
    this.props.getItemsOnLoad() // NOTE if data is loaded??? load multiple times
  }

  render() {
    // Based on search input, filter out the artwork items by title
    // NOTE Selectors would of been nice && includes is handy only for singular string
    const filteredItems = this.props.items.filter(item => {
      return item.artwork_title.toLowerCase().includes(this.props.search)
    }) // Selectors would be nice

    // If loading, render the loader/spinner
    // Otherwise render the list of artworks
    const artList = this.props.isLoading ? (
      <div className="loader" />
    ) : (
      <Fragment>
        {/* NOTE  Neat || Interesting - Fragment*/}
        <h1>Original Art for Sale</h1>
        {/* If list is empty, render a "No artworks" message */}
        {filteredItems.length ? null : <i>No artworks available</i>}
        <List className="art-list">
          {filteredItems.map(item => (
            <ArtworkItem // NOTE key={item.artId} artwork={item} {...this.props}
              key={item.artId}
              id={item.artId}
              artwork_title={item.artwork_title}
              artwork_url={item.artwork_url}
              image_url={item.image_url}
              artist={item.artist}
              dimensions={item.dimensions}
              category={item.category}
              product={item.product}
              toggleFav={this.props.toggleFavorite}
              favs={this.props.favorites}
            />
          ))}
        </List>
      </Fragment>
    )

    return <Wrapper>{artList}</Wrapper> // NOTE return the items inside Wrapper
  }
}
