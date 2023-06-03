import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
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
        }
      }
    }
  }
`)

  return (
    <Layout>
      <div className="py-4">
        Books by Maija
      </div>
      <div className="row">
      {data.allContentfulBook.edges.map((book, index) => {
        console.log("Book", book)
        let bookDisplay = <></>
        if (book.node.bookCover !== null && typeof book.node.title !== undefined) {
          bookDisplay =
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <GatsbyImage 
                  image={getImage(book.node.bookCover)} 
                  alt={book.node.title}
                />
              </div>
            </div>
          </div>
        }
        else {
          bookDisplay = <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  {book.node.title}
                </div>
              </div>
            </div>
        }
        return (
          <div key={book.node.id}>
            {bookDisplay}
          </div>
        )
      })}
      </div>
    </Layout>
  )
}

export default IndexPage

export { Head } from "../components/head";
