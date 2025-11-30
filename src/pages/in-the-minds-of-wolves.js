import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const InTheMindsOfWolves = () => {
    return (
        <Layout>
            <Books title={"In the Minds of Wolves"} />
        </Layout>
    )
}

export default InTheMindsOfWolves;

export { Head } from "../components/head";