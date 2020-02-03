import React, { useState } from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"

import Range from "rc-slider/lib/Range"
import "rc-slider/assets/index.css"

const SOURCE_BSBC = "BSBC"
const SOURCE_ANDREW_SUZUKI = "Andrew Suzuki"
const SOURCE_YALE_CYCLING = "Yale Cycling"

/**
 * TODO
 * - Lighthouse Point (BSBC)
 * - Baldwin Drive (BSBC)
 * - New Haven Century (NHBC)
 * - Mulberry? (NHBC, or True?)
 * - Whirlwind Hill (Yale)
 * - Middlebury Loop (Andrew)
 * - Milford Loop (Andrew)
 * - Stubs:
 *   - Shoreline East Stub (to/from Guilford)
 *   - Shoreline West Stub (to/from Milford)
 *   - To Sleeping Giant Stub (to/from Sleeping Giant)
 * - Copy all routes to my account?
 */
const routes = [
  {
    id: 1229657,
    title: "Yale Loop",
    source: SOURCE_YALE_CYCLING,
    distance: 54,
    climbing: 2089,
    description: (
      <>
        <p>
          The Yale Loop one of two standard routes ridden on the Yale Saturday
          Ride (the two diverge around mile 19 at Time Out Tavern).
        </p>
        <p>
          While it is also a common route for ~50 mile solo rides, there are
          safer / more scenic choices. If you do decide to ride it alone, watch
          out for cars on the long stretch of Route 17 (Middletown Ave). Don't
          forget to stop for coffee at Cilantro on the Guilford Green!
        </p>
        <p>
          Learn more on Yale Cycling's website{" "}
          <a
            href="http://www.yalecycling.org/ride-maps"
            title="Yale Cycling Ride Maps"
          >
            here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 915251,
    title: "Little City",
    source: SOURCE_YALE_CYCLING,
    distance: 73,
    climbing: 3330,
    description: (
      <>
        <p>
          Little City is one of two standard routes ridden on the Yale Saturday
          Ride (the two diverge around mile 19 at Time Out Tavern).
        </p>
        <p>
          The middle ~20 mile southbound section features scenic Connecticut
          backroads. It's followed by a cruise back on the shoreline. Don't
          forget to stop for coffee at Cilantro on the Guilford Green!
        </p>
      </>
    ),
  },
  {
    id: 31863889,
    title: "East Rock",
    source: SOURCE_BSBC,
    distance: 7,
    climbing: 568,
    description: (
      <>
        <p>
          A classic! This route will take you up the "back way" and down the
          "front way" (counter-clockwise), but it's frequently ridden the other
          way too!
        </p>
        <p>
          The back way is closed to traffic year-round, but watch out for
          hikers.
        </p>
        <p>
          The front way is closed to traffic during the winter only. If you're
          looking to train, it's common to do hill repeats on the front way
          (start at the parking lot gate, loop around the monument at the top,
          then descend back to the parking lot gate and repeat).
        </p>
      </>
    ),
  },
  {
    id: 27086506,
    title: "Holiday Hill",
    source: SOURCE_ANDREW_SUZUKI,
    distance: 33,
    climbing: 1961,
    description: (
      <>
        <p>
          Quick loop through Woodbridge/Bethany with a fast descent down Route
          42 (Holiday Hill). This is Andrew's favorite 30 mile ride.
        </p>
      </>
    ),
  },
  {
    id: 23125016,
    title: "BSBC Sunday Hills",
    source: SOURCE_ANDREW_SUZUKI,
    distance: 43,
    climbing: 3626,
    description: (
      <>
        <p>
          This route goes down and up through not one, not two, but{" "}
          <em>three</em> river valleys. There's a fair bit of climbing, but it
          will pay off as you're guided through scenic farmland and some
          interesting microclimates.
        </p>
        <p>
          There's a gas station around mile 22 if you need to fill your water
          bottles.
        </p>
      </>
    ),
  },
]

const RouteFinder = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [distanceRange, setDistanceRange] = useState([0, 100])

  const selected = routes.find(({ id }) => id === selectedId)

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
                  ({ id, title, source, distance, climbing }) => (
                    <tr key={id}>
                      <td>
                        <a
                          href={`https://ridewithgps.com/routes/${id}`}
                          title={title}
                          onClick={e => {
                            e.preventDefault()
                            setSelectedId(id)
                          }}
                        >
                          {selected && id === selected.id ? (
                            <strong>{title}</strong>
                          ) : (
                            title
                          )}
                        </a>
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
      {selected && (
        <div className="routes-selected">
          <Narrow>
            <h2>{selected.title}</h2>
            <p>
              <strong>GPS:</strong>{" "}
              <a
                href={`https://ridewithgps.com/routes/${selected.id}`}
                title={`${selected.title} on RideWithGPS`}
                className="button-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ⤷RideWithGPS
              </a>
            </p>
            <p>
              <strong>Source:</strong> {selected.source} &middot;{" "}
              <strong>Distance:</strong> {selected.distance}mi &middot;{" "}
              <strong>Climbing:</strong> {selected.climbing}ft
              {selected.distance && (
                <> ({Math.round(selected.climbing / selected.distance)}ft/mi)</>
              )}
            </p>
            {selected.description}
            <h3>Preview</h3>
          </Narrow>
          <iframe
            title={selected.title}
            src={`https://ridewithgps.com/embeds?type=route&id=${selected.id}&sampleGraph=true`}
            style={{ width: 1, minWidth: "100%", height: 700, border: "none" }}
            scrolling="no"
          />
        </div>
      )}
    </div>
  )
}

const RoutesPage = () => (
  <Layout>
    <SEO title="Road Routes and Route Finder" />
    <Narrow>
      <h1>Road Routes and Route Finder</h1>
    </Narrow>
    <RouteFinder />
  </Layout>
)

export default RoutesPage
