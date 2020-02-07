import React from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"

const ExternalLink = ({ isPlainLink = false, to, title, children }) => (
  <a
    href={to}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    className={isPlainLink ? null : "button-link"}
  >
    {children || title}&#8599;
  </a>
)

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
      <img
        src="/images/east_rock_mtb.jpg"
        alt="Mountain Biking on East Rock"
        className="full-image"
      />
      <p>
        <ExternalLink
          to="http://scrcog.org/wp-content/uploads/trails/new_haven/alt/RecTrails_NH1_Alt_6-2-16.pdf"
          title="East Rock Trail Map (PDF)"
        />
      </p>
      <p>
        East Rock actually has four distinct peaks (the main summit, Whitney
        Peak, Indian Head, and Snake Rock)! They can all be reached by bike
        (though some hika-a-bike might be necessary for Whitney Peak).
      </p>
      <p>
        While many East Rock trails do not allow mountain biking, there are some
        that allow it (marked with "Mountain Biking Allowed" signs).{" "}
      </p>
      <p>
        Trail Access: We like to enter the park at the trail starting at the
        three-way junction of English Dr, View St, and Rock St (Google Map
        coordinate{" "}
        <ExternalLink
          to="https://goo.gl/maps/R7qZxdadXvxufaY7A"
          title="East Rock Trail Access"
          isPlainLink
        >
          here
        </ExternalLink>
        ).
      </p>
      <p>
        Stop by at the Bradley Street Bicycle Co-op and ask about mountain bike
        rides! We often ride East Rock and other local trails.
      </p>
      <h3>West Rock</h3>
      <img
        src="/images/west_rock_mtb.jpg"
        alt="Mountain Biking on West Rock"
        className="full-image"
      />
      <p>
        <ExternalLink
          to="https://www.ct.gov/deep/lib/deep/stateparks/maps/WestRockGPS.pdf"
          title="West Rock Trail Map (PDF)"
        />
      </p>
      <p>
        West Rock Ridge State Park offers a number of trails, either going up or
        skirting around its 7-mile trap rock ridge. It also includes Lake
        Wintergreen.
      </p>
      <p>
        <strong>Trail Guide</strong>: Most trails are bikeable. The standard mtb
        trails are red, white, purple, yellow, and gold. You can connect between
        them via Baldwin Drive (the road on top of the ridge). The exception is
        the blue trail, which runs north-south along the western side of the
        ridge. Most of it is too technical for any mountain biker. If you're
        looking to take it easy, stick to white and red.
      </p>
      <p>
        <strong>Trail Access</strong>: Entering at the main park entrance on
        Wintergreen Ave is an option, but we prefer to enter at the southern tip
        of the park at the beginning of the red trail. You can get there by
        riding into the West Rock Playground, going over the footbridge, and
        continuing past the baseball field to the left.
      </p>
      <p>
        West Rock is also the home of the West Rock Super Prestige, a series of
        short-track MTB races organized by Amity Cycles during the summer. Learn
        more at the Facebook page{" "}
        <ExternalLink
          to="https://www.facebook.com/westrocksuperprestige/"
          title="West Rock Super Prestige on Facebook"
          isPlainLink
        >
          here
        </ExternalLink>
        .
      </p>
      <h3>Maltby Lakes</h3>
      <img
        src="/images/maltby_lakes_mtb.jpg"
        alt="Mountain Biking at Maltby Lakes"
        className="full-image"
      />
      <p>
        <ExternalLink
          to="http://scrcog.org/wp-content/uploads/trails/RWA/alt/RecTrails_RWA7_Alt_6-2-16.pdf"
          title="Maltby Lakes Trail Map (PDF)"
        />
        <br />
        <span className="small">
          <strong>Note</strong> that this is an incomplete map of the trail
          system &ndash; it actually extends much farther north. The unmapped
          portion is bordered by Fountain St to the north, the Yale Golf Course
          to the east, and the Wilbur Cross Parkway to the west.
        </span>
      </p>
      <p>
        Maltby Lakes is a nature preserve belonging to the Regional Water
        Authority. The trails are generally less technical and more forgiving
        than those on West Rock.
      </p>
      <p>
        <strong>Trail Access</strong>: We prefer to enter on Fountain St, right
        at the intersection with Seneca Rd (Google Maps coordinates{" "}
        <ExternalLink
          to="https://goo.gl/maps/ZocaAKuHBfbbwanu5"
          title="Maltby Lakes MTB Entrance"
          isPlainLink
        >
          here
        </ExternalLink>
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
        <ExternalLink
          to="https://guilfordlandtrust.org/wordpress/wp-content/maps/WestwoodsPrintedMapFull.pdf"
          title="Westwoods Trail Map (PDF)"
        />
      </p>
      <p>
        Westwoods is a trail system on the shoreline in Guilford, CT. It's
        easily accessible with a 1.5-mile bike ride from the Guilford train
        station. You can get there on the Shoreline East train from Union
        Station (~$5 each way).
      </p>
      <p>
        <strong>Trail Access</strong>: We prefer to enter at the southernmost
        entrance (at the intersection of Sam Hill Road with Route 146 / Water
        Street), as it's the closest to the train station (Google Maps link{" "}
        <ExternalLink
          to="https://goo.gl/maps/3c3Z7G9nxK7paDar7"
          title="Westwoods Sam Hill Road Entrance"
          isPlainLink
        >
          here
        </ExternalLink>
        ).
      </p>
      <h2>Other Trails (Requiring a Drive)</h2>
      <ul className="bulleted">
        <li>
          <strong>Rockland</strong> in Madison, CT is the most popular mountain
          biking trail system in southern CT. You can easily spend a day there
          as the trails are fairly extensive. There's also a pump track. The
          drive is about 30 minutes from New Haven.
        </li>
        <li>
          <strong>Tyler Mill</strong> in Wallingford, CT is another option. The
          drive is about 20 minutes from New Haven.
        </li>
      </ul>
    </Narrow>
  </Layout>
)

export default MountainBikingPage
