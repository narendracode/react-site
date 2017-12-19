import React from "react";
import Link from "gatsby-link";
import PostCategories from '../PostCategories'
import PostTags from '../PostTags'
class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.frontmatter.path,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        description : postEdge.node.frontmatter.description
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post =>
          <div className="container" key={post.path}>
            <div className="articles col-md-12">
              <div className="article-wrap" >
                <div className="page-header">
                  <Link style={{ boxShadow: 'none' }} to={post.path}>
                    <h1>{post.title}</h1>
                    <time dateTime={post.date}>{post.date}</time>
                  </Link>
                   <PostCategories categories={post.categories} />
                   <PostTags tags={post.tags} />
                </div>
                <div className="page-content" dangerouslySetInnerHTML={{ __html: post.description }} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PostListing;