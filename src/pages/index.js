import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPage(title: {eq: "Homepage"}) {
        body {
          raw
        }
      }
      allContentfulBook(sort: {order: DESC, fields: publishDate}) {
        edges {
          node {
            amazonEmbed {
              internal {
                content
              }
            }
            amazonLink
            bookCover {
              gatsbyImageData(width: 336, placeholder: BLURRED, formats: AUTO)
              description
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="home">
        {renderRichText(data.contentfulPage.body)}
      </div>
      {data.allContentfulBook.edges.map(book => {
        if (book.node.amazonEmbed !== null && 
          book.node.amazonEmbed.internal.content !== null) {
            const iframe = book.node.amazonEmbed.internal.content;
            let srcVal = iframe.split('src=')[1].split(/[ >]/)[0];
            srcVal = srcVal.slice(1, -1);
            
            return (
              <div className="py-4">
                <iframe 
                  type="text/html" 
                  sandbox="allow-scripts allow-same-origin allow-popups" 
                  width="336" 
                  height="550" 
                  title="blackwaters"
                  allowFullScreen 
                  style={{ maxWidth: "100%" }}
                  src={srcVal}
                >
                </iframe>
              </div>
            )
        }
        else {
          const amazonLink = book.node.amazonLink;
          const bookCover = book.node.bookCover;
          if (amazonLink !== null && bookCover !== null) {
            return (
              <div className="py-4">
                <a href={amazonLink}>
                  <GatsbyImage 
                    image={getImage(book.node.bookCover)} 
                    alt={book.node.description}
                  />
                </a>
              </div>
            )
          }

          if (amazonLink === null && bookCover !== null) {
            return (
              <div className="py-4">
                <GatsbyImage 
                  image={getImage(book.node.bookCover)} 
                  alt={book.node.description}
                />
              </div>
            )
          }
          
          if (amazonLink === null && bookCover === null) {
            return <></>
          }
        }
      })}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
