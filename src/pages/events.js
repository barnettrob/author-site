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
                addressLink
                dateTime
                id
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
                const eventDate = new Date(event.node.dateTime);
                const eventDateLocal = eventDate.toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    dateStyle: 'full',
                    //timeStyle: 'full',
                  });

                return ( 
                    <div className="container" key={event.node.id}>
                        <div className="title h5">
                            {event.node.title}
                        </div>
                        <div className="location fs-6">
                            <span className="text-uppercase fw-bold">
                                Location: {" "}
                            </span>
                            <span className="address">
                                {event.node.addressLink !== null ? (
                                <a href={event.node.addressLink}>
                                    {event.node.address}
                                </a>
                                ) : (event.node.address)}
                            </span>
                        </div>
                        <div className="date-time fs-6">
                            <span className="text-uppercase fw-bold">
                                Date & Time: {" "}
                            </span>
                            <span className="time">
                                {eventDateLocal.replace(" Eastern Daylight Time", "")}
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

export { Head } from "../components/head";