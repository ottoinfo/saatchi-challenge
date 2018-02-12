import React from "react"
import styled from "styled-components"

const Artwork = styled.div`
  background: #fff;
  border: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[3]}px;
  flex: 1 1 0;
  margin: 10px;
  max-width: 100%;
  box-sizing: border-box;

  img {
    width: 100%;
  }
`
// NOTE width: 25%; corrects the text issue of long TITLES

const ImageWrapper = styled.div`
  position: relative;
`

const Favicon = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  background: white;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.liked ? props.theme.colors.red : props.theme.colors.secondary};
  transition: 0.3s ease-in color;
  cursor: pointer;

  &.fa {
    display: flex;
  }

  &:hover {
    color: ${props =>
    props.liked ? props.theme.colors.secondary : props.theme.colors.red};
  }
`

const Info = styled.div`
  margin-top: ${props => props.theme.space[2]}px;
`

const Title = styled.div`
  font-family: ${props => props.theme.fontFamilySerif};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: ${props => props.theme.space[1]}px;

  a {
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.default};
    transition: 0.5s ease color;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`

const SubText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.space[3]}px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.right && "align-items: flex-end;"};
`

export default props => {
  const {
    id,
    artwork_title,
    artwork_url,
    image_url,
    artist,
    dimensions,
    category,
    product,
    toggleFav,
    favs,
  } = props // artwork: {id, art}

  return (
    <Artwork>
      <ImageWrapper>
        <img alt={artwork_title} src={image_url} />
        <Favicon
          onClick={toggleFav.bind(null, id)} // Note () => toggleFav(id)
          liked={favs[id] ? "liked" : null} // favs[id] || Boolean(favs[id])
          className="fa fa-heart"
        />
      </ImageWrapper>
      <Info>
        <Title>
          <a href={artwork_url}>{artwork_title}</a>
        </Title>

        <SubText>
          {category}, {dimensions.width}W x {dimensions.height}H x{" "}
          {dimensions.depth}cm
        </SubText>

        <Row>
          <Column>
            <Title>
              <a href={artist.profile_url}>
                {artist.first_name} {artist.last_name}
              </a>
            </Title>
            <SubText>{artist.country}</SubText>
          </Column>

          <Column right>
            {product.original_status === "avail" && (
              <Title>${(product.original_price / 100).toLocaleString()}</Title>
            )}
            <div>
              {product.prints_available && (
                <span>
                  Prints from ${product.prints_price.toLocaleString()}
                </span>
              )}
            </div>
          </Column>
        </Row>
      </Info>
    </Artwork>
  )
}
