import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import striptags from 'striptags'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import PostTags from '../components/PostTags'
class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.post');
    const site = get(this, 'props.data.site');
    const layout = get(post, 'frontmatter.layout');
    const title = get(post, 'frontmatter.title');
    const siteTitle = get(site, 'meta.title');
    const tags = get(this, 'props.data.post.frontmatter.tags');
    const categories = get(this, 'props.data.post.frontmatter.categories');
    const path = get(this,'frontmatter.path');
    const date = get(this,'frontmatter.date');


    let template = '';
    if (layout != 'page') {
      console.log('checkpoint 1');
      template = <SitePost data={post} site={site} isIndex={false} />
    } else {
      console.log('checkpoint 2');
      template = <SitePage {...this.props} />
    }
    return (
      <div>
        <Helmet
          title={`${title} | ${siteTitle}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'meta.twitter')}` },
            { property: 'og:title', content: get(post, 'frontmatter.title') },
            { property: 'og:type', content: 'article' },
            {
              property: 'og:description',
              content: striptags(get(post, 'html')).substr(0, 200),
            },
            {
              property: 'og:url',
              content: get(site, 'meta.url') + get(post, 'frontmatter.path'),
            },
          ]}
        />
        {template}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url
        author
        twitter
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
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
`