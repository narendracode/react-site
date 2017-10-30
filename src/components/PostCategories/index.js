import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostCategories extends Component {
  render() {
    console.log('post categories is called.' + JSON.stringify(this.props));
    const { categories } = this.props;
    return (
      <div className="post-tag-container">
        {categories &&
          categories.map(category =>
            <Link
              key={category}
              style={{ textDecoration: "none" }}
              to={`/categories/${_.kebabCase(category)}`}
            >
              <span className="badge badge-primary text-white" >
                {category}
              </span>
            </Link>
          )}
      </div>
    );
  }
}

export default PostCategories;