import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RoutePage = ({
  pageContext: {
    route: {
      title,
      stub,
      ride_with_gps,
      source,
      distance,
      climbing,
      description,
    },
  },
}) => (
  <Layout>
    <SEO title={`Route: ${title}`} />
    <Link
      to="/rides/routes"
      title="All Routes"
      className="button-link button-large"
    >
      <strong>🠰 All Routes</strong>
    </Link>
    <h1>
      {title}
      {stub && (
        <>
          {" "}
          <span className="route-tag">Stub</span>
        </>
      )}
    </h1>
    <p>
      <strong>GPS:</strong>{" "}
      <a
        href={`https://ridewithgps.com/routes/${ride_with_gps}`}
        title={`${title} on RideWithGPS`}
        className="button-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>⤷RideWithGPS</strong>
      </a>
    </p>
    <p>
      {source && (
        <>
          <strong>Source:</strong> {source} &middot;{" "}
        </>
      )}
      <strong>Distance:</strong> {distance}mi &middot;{" "}
      <strong>Climbing:</strong> {climbing}ft
      {distance && <> ({Math.round(climbing / distance)}ft/mi)</>}
    </p>
    {description && (
      <div
        className="route-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
    <h3>Preview</h3>
    <iframe
      title={title}
      src={`https://ridewithgps.com/embeds?type=route&id=${ride_with_gps}&sampleGraph=true`}
      style={{ width: 1, minWidth: "100%", height: 700, border: "none" }}
      scrolling="no"
    />
  </Layout>
)

export default RoutePage
