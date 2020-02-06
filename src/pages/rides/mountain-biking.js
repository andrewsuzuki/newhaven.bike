import React from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"

const MountainBikingPage = () => (
  <Layout>
    <SEO title="Mountain Biking" />
    <Narrow>
      <h1>Mountain Biking</h1>
      <h2>Trails in New Haven</h2>
      <p>
        There are three local trail systems that can be accessed without having
        to load up and drive a car.
      </p>
      <h3>East Rock</h3>
      <p>
        While the majority of trails on East Rock do not allow mountain biking,
        there are some that allow it (marked with "Mountain Biking Allowed"
        signs).{" "}
      </p>
      <p>
        Stop by at the Bradley Street Bicycle Co-op and ask about mountain
        biking! We often ride East Rock and other local trails.
      </p>
      <p>TODO more</p>
      <h3>West Rock</h3>
      <p>TODO</p>
      <p>
        West Rock is also the home of the West Rock Super Prestige, a series of
        short-track MTB races organized by Amity Cycles during the summer. Learn
        more at the Facebook page{" "}
        <a
          href="https://www.facebook.com/westrocksuperprestige/"
          title="West Rock Super Prestige on Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <h3>Maltby Lakes</h3>
      <p>
        Maltby Lakes is a nature preserve belonging to the Regional Water
        Authority. The trails are generally more forgiving than those on West
        Rock. General information and a map can be found in the RWA's PDF
        document{" "}
        <a
          href="http://scrcog.org/wp-content/uploads/trails/RWA/alt/RecTrails_RWA7_Alt_6-2-16.pdf"
          title="Maltby Lakes Map"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . <strong>Note</strong> that this is an incomplete map of the trail
        system &ndash; it actually extends much farther north. The unmapped
        portion is bordered by Fountain St to the north, the Yale Golf Course to
        the east, and the Wilbur Cross Parkway to the west.
      </p>
      <p>
        <strong>Trail Access</strong>: We prefer to enter on Fountain St, right
        at the intersection with Seneca Rd (Google Maps coordinates{" "}
        <a
          href="https://goo.gl/maps/ZocaAKuHBfbbwanu5"
          title="Maltby Lakes MTB Entrance"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        ). It's not obvious from the road, but there's a "fence maze" that you
        can enter through. It's also possible to enter/exit on the southern side
        at Route 34 (Derby Ave), but it's sketchy with the speed/volume of
        traffic if you're on your bike.
      </p>
      <h2>Other Trails (Accessible by Train)</h2>
      <p>
        These trails can be accessed by train from Union Station, or by car in a
        pinch :)
      </p>
      <h3>Westwoods (Guilford, CT)</h3>
      <p>
        Westwoods is a trail system on the shoreline in Guilford, CT. It's
        easily accessible with a 1.5-mile bike ride from the Guilford train
        station. You can get there on the Shoreline East train from Union
        Station (~$5 each way). General information and a trail map can be found{" "}
        <a
          href="http://scrcog.org/wp-content/uploads/trails/RWA/alt/RecTrails_RWA7_Alt_6-2-16.pdf"
          title="Westwoods"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        We prefer to enter at the southernmost entrance (at the intersection of
        Sam Hill Road with Route 146 / Water Street), as it's the closest to the
        train station (Google Maps link{" "}
        <a
          href="https://goo.gl/maps/3c3Z7G9nxK7paDar7"
          title="Westwoods Sam Hill Road Entrance"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        ).
      </p>
      <h2>Other Trails (Requiring a Drive)</h2>
      <ul className="bulleted">
        <li>Rockland (Madison, CT)</li>
        <li>Tyler Mill (Wallingford, CT)</li>
      </ul>
    </Narrow>
  </Layout>
)

export default MountainBikingPage
