import React from "react"
import styled from "styled-components"

const Artwork = styled.div`
  background: #fff;
  border: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[3]}px;
`

const formatPrice = price => `$${parseInt(price / 100)}`

export default props => (
  <Artwork>
    <img src={props.image_url} />
    <p>{props.artwork_title}</p>
    <p>{props.subject}</p>, ##H x ##W x ##Din
    <p>
      {props.artist.first_name} {props.artist.lastame}
    </p>
    <p>{formatPrice(props.product.original_price)}</p>
    <p>{props.artist.iso2_country_code}</p>
    <p>{props.product.has_limited_editions}</p>
    <button>View Artwork</button>
  </Artwork>
)
