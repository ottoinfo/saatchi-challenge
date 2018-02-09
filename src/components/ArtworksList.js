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

type Props = {
  products: object,
}

type State = {}

export default class ArtworksList extends PureComponent<Props, State> {
  componentWillMount() {}

  render() {
    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <p>Load Artwork and display</p>
      </Wrapper>
    )
  }
}
