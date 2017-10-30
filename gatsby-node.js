const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators


  return new Promise((resolve, reject) => {
    const pages = []
    const postPage = path.resolve('./src/templates/blog-post.js');
    const tagPage = path.resolve('./src/templates/tag.js');
    const categoryPage = path.resolve('./src/templates/category.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                    tags
                    categories
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const tagSet = new Set();
        const categorySet = new Set();

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {

          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.categories) {
            edge.node.frontmatter.categories.forEach(category => {
              categorySet.add(category);
            });
          }

          createPage({
            path: edge.node.frontmatter.path,
            component: postPage,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });

      })
    )
  })
}