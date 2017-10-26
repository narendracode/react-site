module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
  				`gatsby-plugin-react-helmet`,
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
				}
  		   ]
}