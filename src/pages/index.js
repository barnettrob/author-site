import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBook(filter: {show: {eq: true}}, sort: {publishDate: DESC}) {
      edges {
        node {
          id
          title
          bookCover {
            gatsbyImageData(width: 245, placeholder: BLURRED, formats: AUTO)
            description
          }
          urlPath
        }
      }
    }
  }
`)

  return (
    <Layout>
      <div className="p-4">
        Available for order
      </div>
      <div className="row d-flex justify-content-center books-front-display">
      {data.allContentfulBook.edges.map((book, index) => {
        if (book.node.bookCover !== null && typeof book.node.title !== undefined) {
          return (
          <div className="col col-width-responsive" key={book.node.id}>
            <div className="w-100">
              <div className="mx-4 front-margin-responsive">
                <div className="shadow-lg shadow-lg-responsive">
                  <Link 
                    to={typeof book.node.urlPath !== "undefined" ? 
                    book.node.urlPath : ""}
                  >
                    <GatsbyImage 
                      image={getImage(book.node.bookCover)} 
                      alt={book.node.title}
                      style={{ 'height': '360px' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )
        }
        else {
          return ( 
            <div className="col-sm-6" key={book.node.id}>
              <div className="w-100">
                <div className="mx-4">
                  <Link 
                    to={typeof book.node.urlPath !== "undefined" ? 
                    book.node.urlPath : ""}
                  >
                    {book.node.title}
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      })}
      </div>
    </Layout>
  )
}

export default IndexPage

export { Head } from "../components/head";
