import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage(title: {eq: "Homepage"}) {
        body {
          raw
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="home">
        {renderRichText(data.contentfulPage.body)}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
