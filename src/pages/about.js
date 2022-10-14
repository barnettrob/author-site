import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage(title: {eq: "About"}) {
        body {
          raw
        }
        picture {
          gatsbyImageData(width:1200)
        }
      }
    }
  `)

  const aboutImage = getImage(data.contentfulPage.picture)

  return (
    <Layout>
      <div className="about">
        <div className="description">
          {renderRichText(data.contentfulPage.body)}
        </div>
        <div className="picture">
          <GatsbyImage image={aboutImage} alt="Maija Barnett" />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage