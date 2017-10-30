import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing";
import { siteMetadata } from '../../gatsby-config';

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${siteMetadata.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            layout
            title
            path
            categories
            tags
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`;
