module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    author: `Narendra`,
	description: 'Gatsby starter for bootstrap a blog',
    url: 'https://jaxx2104.github.io/gatsby-starter-bootstrap',
    author: 'Narendra',
    twitter: 'narendra'
  },
  pathPrefix: '/',
  plugins: [
  				`gatsby-plugin-react-helmet`,
  				`gatsby-transformer-remark`,
  				`gatsby-plugin-glamor`,
			    {
			      resolve: `gatsby-plugin-typography`,
			      options: {
			        pathToConfigModule: `src/utils/typography.js`,
			      },
			    },
				{
				    resolve: `gatsby-plugin-sass`,
				    options: {
				      precision: 8,
				    }
				},
				{
			      resolve: `gatsby-source-filesystem`,
			      options: {
			        name: `src`,
			        path: `${__dirname}/articles`,
			      },
			    }
  		   ]
}