import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <div className="author-name">
      <StaticImage 
        src="../images/maija_logo.png"
        alt={"Maija Barnett"}
        className="logo-image"
      />
    </div>
  )
}

export default Logo;