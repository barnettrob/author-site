import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
          body {
            raw
          }
        }
      }
    }
  `)
  console.log("data", data)
  return (
    <Layout>
      <div className="blogs">
        {data.allContentfulBlogPost.nodes.map(blog => {
          return (
            <div key={blog.contentful_id}>
              <div>
                {blog.title}
              </div>
              <div>
                <GatsbyImage image={getImage(blog.blogImage)} alt="Maija Barnett" />
              </div>
              <div>
                {renderRichText(blog.body)}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blogs;