import * as React from "react";
import Layout from "../components/layout";
import Books from "../components/books";

const UpcomingBook = () => {
    return (
        <Layout>
            <h1 className="h4">Upcoming Books</h1>
            <Books upcoming={true} />
        </Layout>
    )
}

export default UpcomingBook;