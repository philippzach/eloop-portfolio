import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import './blog.css';

const List = styled.article`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    background: #fff;
    position: relative;
    margin-bottom: 4rem;
    box-shadow: 2px 2px 30px #949e9b35;   
:hover {
    box-shadow: 2px 2px 30px #949e9b;
    transform: translateY(-1px);
    transition: all .2s ease;
}
`

const Footer = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: rgb(55, 55, 54);
  margin-bottom: 0;
  font-size: .75em;
  padding: 1.5rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`;

const StyledLink = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0;
  color: rgb(55, 55, 54);
  font-style: normal;
  margin-bottom: 1.3rem;
  line-height: 1.35em;
  font-weight: 600;
`;
const Description = styled.p`
color: rgb(55, 55, 54);
line-height: 25px;
font-size: 1rem;
margin-bottom: 0;
`
const Text = styled.div`
padding: 1.5em;
`

export default class BlogItemEn extends Component {
  render() {
    const { node } = this.props;
    const DateString = new Date(node.data.date);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const PubDate = DateString.toLocaleDateString('en-US', options);
    return (
      <List className="blogpost">
            <Link className="blogitemlink" to={`/en/blog/${node.uid}`}>
              <Img className="shadowblog" fluid={node.data.headerimage.localFile.childImageSharp.fluid} alt={node.data.headerimage.alt} loading="lazy"/>
              </Link>
              <Text>      
              <Link className="blogitemlink" to={`/en/blog/${node.uid}`}>
                <StyledLink>
                {node.data.title.text}
                </StyledLink>
                </Link>
                <Link className="blogitemlink" to={`/en/blog/${node.uid}`}>
                <Description>
                  {node.data.description}
                </Description>
                </Link>
        </Text>        
        <Footer>
          {PubDate} · by <b>{node.data.author.text}</b>
        </Footer>
        </List>
        
    );
  }
}

/* ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired
};
 */

