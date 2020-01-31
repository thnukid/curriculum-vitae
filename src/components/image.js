import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ src, isSize }) => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allFile.edges.find(edge => {
        return edge.node.relativePath.replace(/\.[^/.]+$/, "") === src
      })
      if (!image) {
        return null
      }

      if (image.node.extension == "svg") {
        return (
          <figure className={"image " + (isSize ? `is-${isSize}` : "")}>
            <img src={image.node.publicURL} />
          </figure>
        )
      }
      return (
        <figure className={"image " + (isSize ? `is-${isSize}` : "")}>
          <Img fluid={image.node.childImageSharp.fluid} />
        </figure>
      )
    }}
  />
)
export default Image
