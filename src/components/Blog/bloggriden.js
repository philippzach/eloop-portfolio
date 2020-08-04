import React, { Component } from 'react';
import styled from '@emotion/styled';
//import PropTypes from 'prop-types';
import BlogItem from './blogitemen';
import './blog.css';

const List = styled.div`
  margin-bottom: 4rem;
  margin-top: 4em;
  display: grid;
  grid-column-gap: 2rem;
  grid-template-rows: auto;
  @media (min-width: 52em) {
    grid-template-columns: repeat(2,1fr);
}
@media (min-width: 64em){
    grid-template-columns: repeat(3,1fr);
}
`;

export default class BlogGrid extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List className="bloggrid">
        { 
          posts.map(post => {
          return <BlogItem key={post.node.uid} node={post.node}  />;
        })
        }
      </List>
    );
  }
}

/* BlogGrid.propTypes = {
  posts: PropTypes.array.isRequired,
};
 */