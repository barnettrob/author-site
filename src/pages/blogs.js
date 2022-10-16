import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card } from "react-bootstrap";

const Blogs = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: {fields: createdAt, order: DESC}) {
        nodes {
          contentful_id
          title
          blogImage {
            gatsbyImageData(width:1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          shortDescription
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="blogs">
        {data.allContentfulBlogPost.nodes.map(blog => {
          return (
            <div key={blog.contentful_id}>
              <Card className="my-5">
                <GatsbyImage image={getImage(blog.blogImage)} alt="Maija Barnett" />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>
                  {blog.shortDescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blogs;