import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const UpcomingBook = () => {
    return (
        <Layout>
            <Books upcoming={true} />
        </Layout>
    )
}

export default UpcomingBook;