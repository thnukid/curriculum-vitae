module.exports = {
  siteMetadata: {
    title: "ERIC BARTHOLEMY",
    description: "Curriculum Vitae",
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
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify",
    "gatsby-plugin-catch-links",
  ],
  pathPrefix: "/curriculum-vitae"
}