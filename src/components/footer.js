import React from "react";
import { Link } from "gatsby";
import TwitterIcon from "./socialMedia/icons/twitter";
import InstagramIcon from "./socialMedia/icons/instagram";
import GoodReadsIcon from "./socialMedia/icons/goodreads";
import FacebookIcon from "./socialMedia/icons/facebook";
import SocialMedia from "./socialMedia";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
      <ul className="footer d-flex justify-content-center align-items-center list-unstyled mt-5 text-muted fs-6">
        <SocialMedia />
        <li className="p-3">
          &#169; {year} Maija Barnett
        </li>
      </ul>
  )
}

export default Footer;