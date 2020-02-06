import React from "react"
import { Link } from "gatsby"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"

const GroupRidesPage = () => (
  <Layout>
    <SEO title="Group Rides" />
    <Narrow>
      <h1>Group Rides</h1>
      <p className="small">
        <a href="#casual" title="Casual Rides" className="button-link">
          Casual Rides&#8628;
        </a>
        &nbsp;
        <a href="#road" title="Road Rides" className="button-link">
          Road Rides&#8628;
        </a>
      </p>
      <p>
        There are a few groups that organize rides in New Haven. Most group ride
        organization and communication happens in the{" "}
        <a
          href="https://www.facebook.com/groups/nhbikerides/"
          title="New Haven Bike Rides"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Haven Bike Rides
        </a>{" "}
        Facebook group (~1400 members). If you don't have a Facebook account,
        you can still view the posts.
      </p>
      <p className="small">
        <strong>No-drop</strong>: a group ride where no rider will be left
        behind. Usually this means the group will ride at the speed of the
        slowest rider. Less often, it means the group will wait at turns,
        intersections, or predetermined points for slower riders to catch up.
        Most group rides are no-drop, with the exception of some fast road
        rides.
      </p>
      <h2 id="casual">Casual Group Rides</h2>
      <p>
        Casual rides are typically no-drop, on the slower side, and have planned
        stops or a destination. As long as you have a working bicycle, you can
        and should join a casual ride!
      </p>
      <h3>New Haven Bike Party</h3>
      <img
        src="/images/bike_party.jpg"
        alt="New Haven Bike Party, Summer 2019"
        className="full-image"
      />
      <p>
        New Haven Bike Party is a group bike ride open to any and all bike
        riders. It is the 2nd Friday Night of each month. Bike Party is about
        engaging with your biking and local community. It is a monthly
        celebration of bikes in our great city.
      </p>
      <p>
        Every Bike Party has a different starting point and a different route.
        Riders meet at 7:30PM and we leave at 8PM. Rides are usually around 10
        miles with stops.
      </p>
      <p>
        Bike Party is first and foremost a PARTY! There is music, and costumes
        and all kinds of celebrating!! So dress up and get on your bikes and
        ride!!!
      </p>
      <p>
        Follow New Haven Bike Party on their{" "}
        <a
          href="https://www.facebook.com/pg/newhavenbikeparty"
          title="New Haven Bike Party"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook page
        </a>{" "}
        and/or{" "}
        <a
          href="https://www.instagram.com/nhvbikeparty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        for ride information and updates!
      </p>
      <p>
        {/* TODO FUTURE remove when it gets warm */}
        <em>**Currently on winter break! Check back in when it gets warm.**</em>
      </p>
      <h3>OutSpokin Rides</h3>
      <p>TODO (sp?)</p>
      <h2 id="road">Road Group Rides</h2>
      <p>
        By "road rides", we mean rides longer than 15 miles that require the use
        of a road bike (drop bars and slick tires). Please be prepared with a
        tube and tools to fix a flat!
      </p>
      <p>
        Some groups describe their rides with a target <strong>pace</strong>{" "}
        (average speed). <em>C-pace</em> is 13-15mph and typically no-drop.{" "}
        <em>B-pace</em> is 16-19mph &ndash; riders should be familiar with
        riding and drafting in a group. <em>A-pace</em> is 20+mph.
      </p>
      <p>
        Also see our{" "}
        <Link to="/rides/routes" title="Routes">
          routes
        </Link>{" "}
        page if you're looking to find a good route for your next road ride!
      </p>
      <h3>New Haven Bicycling Club (NHBC) Rides</h3>
      <p>
        NHBC organizes two rides during the week on Tuesday and Thursday
        evenings (excluding the winter months). Rides are 25-35 miles. When
        there's a large turnout, riders will form smaller groups based on pace
        (A/B/C-pace), otherwise they are ~B-pace. Check out the{" "}
        <a
          href="https://www.facebook.com/groups/nhbikerides/"
          title="New Haven Bike Rides"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Haven Bike Rides
        </a>{" "}
        Facebook group to learn more.
      </p>
      <h3>Devil's Gear Shop Rides</h3>
      <p>TODO</p>
      <h3>Yale Cycling Team Rides</h3>
      <p>
        If you're a faster rider with drafting skills (16+mph in a group), you
        can join the Yale Cycling team on their Saturday rides. The routes are
        the same every week &ndash; 54-mile and 72-mile routes that diverge at
        the 20-mile mark. Learn more at their website{" "}
        <a
          href="http://www.yalecycling.org/ride-maps"
          title="Yale Cycling Ride Maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <h3>Sleeping Giant Ride (SGR)</h3>
      <p>
        SGR is the most popular "hammerfest"/"Tuesday Night Worlds"-style ride
        in Southern Connecticut. You must be a bike racer that can maintain
        23-25mph in a group of 25-60 people for 37 miles. The ride starts at
        Sleeping Giant in Hamden, CT but there's often a small group of people
        from New Haven that ride up. Learn more at Cheshire Cycle's website{" "}
        <a
          href="http://www.cheshirecycle.com/group-and-shop-rides.html"
          title="Cheshire Cycle Group and Shop Rides"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </Narrow>
  </Layout>
)

export default GroupRidesPage
