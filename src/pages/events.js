import * as React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Events = () => {
    const data = useStaticQuery(graphql`
    {
        allContentfulEvent {
            edges {
              node {
                title
                description {
                    raw
                }
                location {
                    lat
                    lon
                }
                address
                dateTime
                }
              }
            }
    }
  `)
    
    return (
        <Layout>
            <h1 className="h3 mb-4">
                Events
            </h1>
            <div className="events">
            {data.allContentfulEvent.edges.map(event => {
                return ( 
                    <div className="container">
                        <div className="title h5">
                            {event.node.title}
                        </div>
                        <div className="location fs-6">
                            <span className="text-uppercase fw-bold">
                                Location: {" "}
                            </span>
                            <span className="address">
                                {event.node.address}
                            </span>
                        </div>
                        <div className="date-time fs-6">
                            <span className="text-uppercase fw-bold">
                                Date & Time: {" "}
                            </span>
                            <span className="time">
                                {event.node.dateTime}
                            </span>
                        </div>
                        <div className="description py-3 fs-6">
                            {renderRichText(event.node.description)}
                        </div>
                    </div>
                )
            })}
            </div>
        </Layout>
    )
}

export default Events;