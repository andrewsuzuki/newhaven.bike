import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"

import Range from "rc-slider/lib/Range"
import "rc-slider/assets/index.css"

const RouteFinder = ({ routes }) => {
  const [distanceRange, setDistanceRange] = useState([0, 100])

  const filteredRoutes = routes
    .filter(({ distance }) => {
      if (distance < distanceRange[0] || distance > distanceRange[1]) {
        if (distanceRange[1] !== 100 || distance < 100) {
          return false
        }
      }

      return true
    })
    .sort((a, b) =>
      a.distance === b.distance ? 0 : a.distance < b.distance ? -1 : 1
    )

  return (
    <div>
      <Narrow>
        <div className="routes-filters">
          Filter by distance (miles):
          <Range
            min={0}
            max={100}
            marks={{
              0: 0,
              10: 10,
              25: 25,
              50: 50,
              75: 75,
              100: "100+", // special case -- include all routes >= 100mi (see filter)
            }}
            step={null} // use marks as steps (null)
            value={distanceRange}
            onChange={newRange =>
              // don't allow start === end (enforce range width)
              newRange[0] === newRange[1] ? null : setDistanceRange(newRange)
            }
          />
        </div>
        <div className="routes-list">
          {filteredRoutes.length === 0 ? (
            <p>
              <em>No results. Try adjusting the filters.</em>
            </p>
          ) : (
            // TODO different structure for mobile? tables aren't clean
            <table>
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Source</th>
                  <th>Distance</th>
                  <th>Climbing</th>
                </tr>
              </thead>
              <tbody>
                {filteredRoutes.map(
                  ({ slug, title, stub, source, distance, climbing }) => (
                    <tr key={slug}>
                      <td>
                        <Link
                          to={`/rides/routes/${slug}`}
                          title={`Route: ${title}`}
                        >
                          {title}
                        </Link>
                        {stub && (
                          <>
                            {" "}
                            <span className="route-tag">Stub</span>
                          </>
                        )}
                      </td>
                      <td>{source}</td>
                      <td>{distance}mi</td>
                      <td>{climbing}ft</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </Narrow>
    </div>
  )
}

const RoutesPage = ({ data }) => (
  <Layout>
    <SEO title="Road Routes and Route Finder" />
    <Narrow>
      <h1>Road Routes and Route Finder</h1>
    </Narrow>
    <RouteFinder routes={data.allRoute.edges.map(edge => edge.node.route)} />
  </Layout>
)

export default RoutesPage

export const query = graphql`
  query {
    allRoute {
      edges {
        node {
          route {
            slug
            stub
            ride_with_gps
            title
            source
            distance
            climbing
            description
          }
        }
      }
    }
  }
`
