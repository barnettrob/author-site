require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Maija Barnett`,
    description: `Maija Barnett's YA verse novel hi-lo author site`,
    keywords: `maija barnett, ya books, verse novel, hi-lo`,
    author: `Maija Barnett`,
    siteUrl: `https://maijabarnett.com`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACEID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      query: `
      allSitePage(filter: {path: {regex: "/^((?!blog).)*$/s"}}) {
        nodes {
          path
        }
      }
      `,
      resolveSiteUrl: () => siteUrl,
      resolvePages: ({
        allSitePage: { nodes: allPages },
      })
    },
    serialize: ({ path, modifiedGmt }) => {
      return {
        url: path,
        lastmod: modifiedGmt,
      }
    }
  }]
};