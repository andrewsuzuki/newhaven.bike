import React, { useState } from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"

import Range from "rc-slider/lib/Range"
import "rc-slider/assets/index.css"

const SOURCE_BSBC = "BSBC"
const SOURCE_ANDREW_SUZUKI = "Andrew Suzuki"
const SOURCE_YALE_CYCLING = "Yale Cycling"
const SOURCE_NHBC = "NHBC"
const SOURCE_DEVILS = "Devil's Gear"

/**
 * TODO
 * - Mulberry? (NHBC, or True?)
 * - Canal?
 *
 * - Copy all routes to my account?
 */
const routes = [
  {
    id: 31864371,
    title: "Orchard Loop",
    source: SOURCE_DEVILS,
    distance: 23,
    climbing: 1270,
    description: (
      <>
        This classic Devil's Gear route climbs up into an apple orchard at its
        midpoint.
      </>
    ),
  },
  {
    id: 31864457,
    title: "Ridge Road (Sleeping Giant)",
    stub: true,
    source: null,
    distance: 8,
    climbing: 444,
    description: (
      <>
        <p>
          Ridge Road [+ Davis Road + New Road] is the standard way to travel
          to/from Sleeping Giant State Park. Most 20mi+ routes vaguely north of
          New Haven will include this stub. Ideas from there:
        </p>
        <ul className="bulleted">
          <li>Hike at Sleeping Giant State Park.</li>
          <li>
            Ride up the classic{" "}
            <a
              href="https://ridewithgps.com/routes/31864474"
              title="Kimberly Ave Climb on RideWithGPS"
            >
              Kimberly Ave Climb
            </a>{" "}
            for an amazing view (+ chill on chairs at the top).
          </li>
          <li>
            Go to{" "}
            <a href="https://www.mikrodepot.com/" title="MiKro Depot">
              MiKro
            </a>{" "}
            (if you're into beer).
          </li>
          <li>
            Pet the animals (when it's warm) or go ice skating (when it's cold)
            at{" "}
            <a href="http://www.brooksvalepark.com/" title="Brooksvale Park">
              Brooksvale Park
            </a>
            .
          </li>
          <li>
            If you're into riding with 25-60 other people at 24mph, check out
            the{" "}
            <a
              href="http://www.cheshirecycle.com/group-and-shop-rides.html"
              title="Sleeping Giant Ride"
            >
              Sleeping Giant Ride
            </a>
            ! Racers only.
          </li>
          <li>
            Ride back the same way, or on the Farmington Canal Trail (~16mi
            round trip).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 31864104,
    title: "Shoreline East",
    stub: true,
    source: null,
    distance: 21,
    climbing: 988,
    description: (
      <>
        <p>
          This segment has become the standard way to travel to/from almost all
          routes east of New Haven, due to a few big obstacles (traffic, two
          large protected water areas, and I-95) that complicate all other
          options.
        </p>
        <p>
          There's a lot of ideal riding that opens up once you get to the end of
          this stub (the Guilford green). You can explore the backroads of
          quaint Connecticut towns (Madison, Clinton, Killingworth, Westbrook,
          Chester, etc). Or if you're trying to get back earlier, you can take
          Route 77 straight north to Durham, then find your way back from there.
          In a pinch, you can always take the Shore Line East{" "}
          <a href="https://shorelineeast.com" title="Shore Line East train">
            train
          </a>{" "}
          back to New Haven.
        </p>
        <p>
          Please note that this variation takes you on the{" "}
          <em>Branford Trolley Trail</em> through the{" "}
          <em>Pine Orchard Marsh Wildlife Area</em>. This is a short, super
          scenic, fine-gravel trail that should be suitable for most bikes
          (including skinny-tire road bikes). However, if it's a wet day or
          you're trying to maximize speed, it's best to skip it by continuing on
          Totoket Road at mile 14.9 until you reach Route 146. Take a right at
          the three-way junction and continue on 146 until you rejoin the route.
        </p>
      </>
    ),
  },
  {
    id: 31864282,
    title: "Lighthouse Point",
    source: null,
    distance: 14,
    climbing: 513,
    description: (
      <>
        <p>Quick loop to the beach!</p>
      </>
    ),
  },
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
          The middle ~20-mile southbound section features scenic Connecticut
          backroads. It's followed by a cruise back on the shoreline. Don't
          forget to stop for coffee at Cilantro on the Guilford Green!
        </p>
      </>
    ),
  },
  {
    id: 31863889,
    title: "East Rock",
    source: null,
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
    id: 31863999,
    title: "Baldwin Drive (West Rock)",
    source: null,
    distance: 19,
    climbing: 1291,
    description: (
      <>
        <p>
          Baldwin Drive runs along the ridge of West Rock Ridge State Park. It
          is closed to motor vehicle traffic. While it is paved, it hasn't been
          maintained in decades, so be prepared for a flat just in case!
        </p>
      </>
    ),
  },
  {
    id: 20290248,
    title: "Milford Loop",
    source: SOURCE_ANDREW_SUZUKI,
    distance: 29,
    climbing: 1293,
    description: (
      <>
        <p>
          This route hugs the shoreline west of New Haven with scenic views of
          the ocean. After an espresso stop in Milford, it'll lead you on a
          cruise through Orange before sending you flying back into New Haven on
          Fountain St. If you're looking to avoid a lot of climbing, this is
          your route!
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
    id: 20750264,
    title: "Middlebury Loop",
    source: SOURCE_ANDREW_SUZUKI,
    distance: 66,
    climbing: 4217,
    description: (
      <>
        <p>
          This is a fantastic route, a bit longer than a metric century. It has
          considerably lower motor traffic than the New Haven Metric Century
          route. It is the <em>quietest</em> 60-70mi route I could come up with
          while staying on paved roads. Scenic, but you'd better bring your
          climbing legs!
        </p>
        <p>
          There's a short segment of gravel at mile 20.6. I've taken riders with
          skinny-tire road bikes on it with no problem, but if you're worried,
          it can be bypassed easily by continuing on Quaker Farms Road (Route
          188) until you rejoin the route.
        </p>
      </>
    ),
  },
  {
    id: 23125016,
    title: "BSBC Sunday Hills",
    source: SOURCE_BSBC,
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
          bottles. Shortly after that, there's a short bridge over a dam without
          a shoulder -- ride fast!
        </p>
      </>
    ),
  },
  {
    id: 22690382,
    title: "New Haven Century",
    source: SOURCE_NHBC,
    distance: 100,
    climbing: 4395,
    description: (
      <>
        <p>
          This is the classic New Haven Century route! It probably isn't the
          most scenic century you can do from New Haven, but it hits all of the
          classic spots within a 15-mile radius, and it's fairly predictable
          (which is probably what you want when riding 100 miles)!
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
                  ({ id, title, stub, source, distance, climbing }) => (
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
      {selected && (
        <div className="routes-selected">
          <Narrow>
            <h2>
              {selected.title}
              {selected.stub && (
                <>
                  {" "}
                  <span className="route-tag">Stub</span>
                </>
              )}
            </h2>
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
              {selected.source && (
                <>
                  <strong>Source:</strong> {selected.source} &middot;{" "}
                </>
              )}
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
