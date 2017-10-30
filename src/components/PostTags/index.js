import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
  render() {
    console.log('post tags is called.' + JSON.stringify(this.props));
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag =>
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <span className="hashtag">
                #{tag}
              </span>
            </Link>
          )}
      </div>
    );
  }
}

export default PostTags;