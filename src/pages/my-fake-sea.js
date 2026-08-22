import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const MyFakeSea = () => {
    return (
        <Layout>
            <Books title={"My Fake Sea"} />
        </Layout>
    )
}

export default MyFakeSea;

export { Head } from "../components/head";