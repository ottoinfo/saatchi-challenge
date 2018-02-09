/*
  TOTALLY WRONG, but to get this going using ``dangerouslySetInnerHTML``
  Please don't do this!!!
*/

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import marked from 'marked';

import myMarkdownFile from '../README.md';

const Wrapper = styled.div`
  h1 {
    margin-bottom: 30px;
  }
  code {
    padding: 10px 20px;
    display: block;
    background-color: white;
    border-radius: 3px;
  }
  p {
    color: ${props => props.theme.colors.secondary};
  }
  a {
    color: ${props => props.theme.colors.secondary};
    transition: color ease-in 0.2s;
    text-transform: none;
    text-decoration: none;
    outline: none;
    + a {
      margin-left: 30px;
    }

    &:focused,
    &:visited {
      color: ${props => props.theme.colors.secondary};
    }

    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`;

export default class Instructions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null,
    };
  }

  componentWillMount() {
    fetch(myMarkdownFile)
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }));
  }

  render() {
    const { markdown } = this.state;
    if (!markdown) {
      return null;
    }

    return (
      <Wrapper
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { sanitize: true }),
        }}
      />
    );
  }
}
