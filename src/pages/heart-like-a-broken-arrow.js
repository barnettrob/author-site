import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const HeartLikeABrokenArrow = () => {
    return (
        <Layout>
            <Books upcoming={false} />
        </Layout>
    )
}

export default HeartLikeABrokenArrow;

export { Head } from "../components/head";