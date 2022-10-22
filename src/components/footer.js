import React from "react";
import { Link } from "gatsby";
import TwitterIcon from "./twitter";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
      <ul className="footer d-flex justify-content-center align-items-center list-unstyled mt-5 text-muted fs-6">
        <li className="p-3">
          <Link 
            to="http://www.twitter.com/MaijaBarnett"
            className="text-decoration-none text-muted"
          >
            <TwitterIcon />
            Twitter
          </Link>
        </li>
        <li className="p-3">
          &#169; {year} Maija Barnett
        </li>
      </ul>
  )
}

export default Footer;