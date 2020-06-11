module.exports = {
  siteMetadata: {
    title: "ERIC BARTHOLEMY",
    description: "Software Developer with 5 years experience",
    author: `@thnukid`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ebax.dev",
        short_name: "Ebax",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/profile.jpeg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify",
    "gatsby-plugin-catch-links",
  ],
  pathPrefix: "/curriculum-vitae",
  assetPrefix: "/curriculum-vitae",
}
