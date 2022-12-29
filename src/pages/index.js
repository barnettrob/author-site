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
      <iframe 
        type="text/html" 
        sandbox="allow-scripts allow-same-origin allow-popups"
        title="blackwaters"
        width="336" 
        height="550" 
        frameborder="0" 
        allowfullscreen 
        style={{ maxWidth: "100%" }}
        src="https://read.amazon.com/kp/card?asin=B005AHO7PW&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_A9PNG5QRJ3RS558648XJ"
      >
        </iframe>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
