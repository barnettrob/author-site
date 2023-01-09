import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FacebookIcon from "./icons/facebook";
import GoodReadsIcon from "./icons/goodreads";
import InstagramIcon from "./icons/instagram";
import TwitterIcon from "./icons/twitter";

const SocialMedia = () => {
    const data = useStaticQuery(graphql`
    {
        allContentfulSocialMedia(filter: {show: {eq: true}}) {
          edges {
            node {
              svgIdentifier
              title
              id
              url
            }
          }
        }
      }
  `)

    let svgIcon  = <></>

    return (
        <>
            {data.allContentfulSocialMedia.edges.map(social => {
                switch (social.node.svgIdentifier) {
                    case 'facebook':
                        svgIcon = <FacebookIcon />
                        break;
                    case 'goodreads':
                        svgIcon = <GoodReadsIcon />
                        break;
                    case 'instagram':
                        svgIcon = <InstagramIcon />
                        break;
                    case 'twitter':
                        svgIcon = <TwitterIcon />
                        break;
                    default:
                        svgIcon = <></>
                }
                return (
                    <li className="p-3" key={social.node.id}>
                    <a 
                        href={social.node.url}
                        className="text-decoration-none text-muted"
                    >
                        {svgIcon}
                        {social.node.title}
                    </a>
                    </li>
                )
        })}
        </>
    )
}

export default SocialMedia;