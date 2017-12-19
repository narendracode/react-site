import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing";
import { siteMetadata } from '../../gatsby-config';
export default class CategoryTemplate extends React.Component {
  render() {
    const categories = this.props.pathContext.categories;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${categories}" | ${siteMetadata.title}`}
        />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            layout
            title
            path
            categories
            description
            tags
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`;