import React from "react";
import Layout from "../components/layout";
import {graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const BlogPost = ({ data }) => {
  const blogImage = getImage(data.contentfulBlogPost.blogImage);

  return (
    <Layout>
      <div className="blog-post">
        <GatsbyImage image={blogImage} alt={data.contentfulBlogPost.blogImage.description} />
        <h1>{data.contentfulBlogPost.title}</h1>
        <p className="text-muted">
          {data.contentfulBlogPost.createdAt}
        </p>
        <div>
          {renderRichText(data.contentfulBlogPost.body)}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query blogListQuery($alias: String!) {
    contentfulBlogPost(pathAlias: {eq: $alias}) {
      title
      createdAt(formatString: "MM/DD/YYYY")
      body {
        raw
      }
      blogImage {
        gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        description
      }
    }
  }
`