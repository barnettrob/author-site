import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="h3 mt-5">
        Looking for something?
      </h1>
      <p>
        Let's get you back{" "}<Link to="/">home</Link>.
      </p>
      <div className="mt-5">
        <StaticImage 
          src="../images/rat404.jpg" 
          alt={"page not found"}
          className="lost-image"
        />
      </div>
      <div className="fst-italic text-muted fs-6">
        Image courtesy of Calista Barnett
      </div>

    </Layout> 
  )
}

export default NotFoundPage

export { Head } from "../components/head";
