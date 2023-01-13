import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Books = ( props ) => {
    const upcoming = props.upcoming;

    const data = useStaticQuery(graphql`
    {
        allContentfulBook(filter: {show: {eq: true}}) {
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
                id
                title
                publisher
                publisherReference {
                  url
                  name
                }
                upcoming
                synopsis {
                  raw
                }
              }
            }
          }
        }
  `)

    return (
        <>
          {data.allContentfulBook.edges.map((book, index) => {
            if (upcoming === book.node.upcoming) {
              let bookDisplay = <></>
              if (book.node.amazonEmbed !== null && 
                book.node.amazonEmbed.internal.content !== null) {
                  const iframe = book.node.amazonEmbed.internal.content;
                  let srcVal = iframe.split('src=')[1].split(/[ >]/)[0];
                  srcVal = srcVal.slice(1, -1);
                  bookDisplay = <iframe 
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
              }
              else {
                bookDisplay = <GatsbyImage 
                  image={getImage(book.node.bookCover)} 
                  alt={book.node.title}
                />
              }
              
              const amazonLink = book.node.amazonLink;
 
              return (
                <div className="py-4 container-sm" key={book.node.id}>
                  <div className="text-center">
                    {amazonLink !== null && bookDisplay !== <></> && (
                      <>
                        <a href={amazonLink}>
                          {bookDisplay}
                        </a>
                        <div className="text-center">
                          <a 
                            href={amazonLink}
                            type="button" 
                            className="btn btn-outline-primary mt-2"
                          >
                            Get your copy on Amazon
                          </a>
                        </div>
                      </>
                    )}
                    {amazonLink === null && bookDisplay !== <></> && (
                      <div>
                        {bookDisplay}
                      </div>
                    )}
                  </div>
                  {book.node.title !== null && (
                    <div className="py-4">
                      {book.node.title}
                    </div>
                  )}
                  {book.node.publisherReference !== null && (
                    <div className="text-muted fs-6 py-3">
                      <span className="me-2 text-black">Publishing House:</span> 
                        <a 
                          href={book.node.publisherReference.url} 
                          className="bn"
                        >
                          {book.node.publisherReference.name}
                        </a>
                    </div>
                  )}
                  {book.node.synopsis !== null && (
                    <div className="text-muted fs-5">
                      {renderRichText(book.node.synopsis)}
                    </div>
                  )}
                  {book.node.barnesAndNobleLink !== null && (
                    <div className="fs-6 text-center py-3">
                      Also available at {" "}
                      <a href={book.node.barnesAndNobleLink} className="bn">
                        Barnes & Nobles
                      </a>
                    </div>
                  )}
                </div>
              )
              
            }
            else {
              return <div key={index}></div>
            }
          })}
        </>
    )
}

export default Books;