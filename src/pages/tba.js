import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const SongImIn = () => {
    return (
        <Layout>
            <Books upcoming={true} />
        </Layout>
    )
}

export default SongImIn;

export { Head } from "../components/head";