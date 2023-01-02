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
      allContentfulBook(
        sort: {order: DESC, fields: publishDate}
        filter: {show: {eq: true}, upcoming: {eq: false}}
        ) {
        edges {
          node {
            amazonEmbed {
              internal {
                content
              }
            }
            amazonLink
            barnesAndNobleLink
            bookCover {
              gatsbyImageData(width: 336, placeholder: BLURRED, formats: AUTO)
              description
            }
            title
            publisher
            synopsis {
              raw
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
              <div className="py-4 container-sm">
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
              <div className="py-4 container-sm">
                <div className="text-center">
                  <a href={amazonLink}>
                    <GatsbyImage 
                      image={getImage(book.node.bookCover)} 
                      alt={book.node.description}
                    />
                  </a>
                  <div className="text-center">
                    <a 
                      href={amazonLink}
                      type="button" 
                      className="btn btn-outline-primary mt-2"
                    >
                      Get your copy
                    </a>
                  </div>
                </div>
                <div className="h3 pt-5">
                  {book.node.title}
                </div>
                <div className="text-muted fs-6 py-3">
                  <span className="me-2 text-black">Publishing House:</span> 
                  {book.node.publisher}
                </div>
                <div className="text-muted fs-5">
                  {renderRichText(book.node.synopsis)}
                </div>
                <div className="fs-5 text-center py-3">
                  Also available at {" "}
                  <a href={book.node.barnesAndNobleLink}>
                    Barnes & Nobles
                  </a>
                </div>
              </div>
            )
          }

          if (amazonLink === null && bookCover !== null) {
            return (
              <div className="py-4 container-sm">
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
