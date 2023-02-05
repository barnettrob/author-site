import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const IndexPage = () => {
  return (
    <Layout>
      <Books upcoming={false} />
    </Layout>
  )
}

export default IndexPage

export { Head } from "../components/head";
