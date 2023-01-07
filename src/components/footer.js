import React from "react";
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