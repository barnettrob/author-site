import React from "react";
import Layout from "../components/layout";
import {Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card } from "react-bootstrap";
import { Pagination } from "../components/pagination";

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <Layout>
      <div className="blogs">
        <h1 className="text-center pt-5">Blogs</h1>
        {posts.map(blog => {
          return (
            <div key={blog.node.contentful_id}>
              <Link 
                    to={`/blog/${blog.node.pathAlias}`}
                    className="text-dark text-decoration-none"
              >
                <Card className="my-5 shadow bg-body rounded">
                  <GatsbyImage image={getImage(blog.node.blogImage)} alt="Maija Barnett" />
                  <Card.Body>
                    <Card.Subtitle>{blog.node.createdAt}</Card.Subtitle>
                    <Card.Title className="fs-3">
                      {blog.node.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                    {blog.node.shortDescription}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        })}
        <Pagination pageInfo={this.props.data.allContentfulBlogPost.pageInfo} />
      </div>
    </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: {fields: createdAt, order: DESC}
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          contentful_id
          title
          pathAlias
          shortDescription
          createdAt(formatString: "MM/DD/YYYY")
          blogImage {
            gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`