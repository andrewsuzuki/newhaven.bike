import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HeroCard = ({ title, to, colorClassName, children }) => (
  <div className={`hero-card ${colorClassName}`}>
    <h2>
      <Link to={to} title={title}>
        {title}
      </Link>
    </h2>
    {children}
  </div>
)

const SubCards = ({ cards }) => (
  <div className="sub-cards">
    {cards.map(({ to, title, blurb, emojis }) => (
      <div className="sub-card" key={to}>
        <Link to={to} title={title}>
          {title}
          {emojis && emojis.length > 0 && (
            <>
              {" "}
              {emojis.map(([emoji, label], i) => (
                <span role="img" aria-labelledby={label} key={i}>
                  {emoji}
                </span>
              ))}
            </>
          )}
        </Link>
        {blurb && <span className="blurb">{blurb}</span>}
      </div>
    ))}
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-cards">
      <HeroCard title="Community" to="/community" colorClassName="blue">
        <p>Connect with the New Haven cycling community!</p>
        <SubCards
          cards={[
            {
              to: "/community/events-and-meetups",
              title: "Events and Meetups",
              blurb:
                "Learn about New Haven cycling events like New Haven Bike Party, Rock to Rock, New Haven Bike Month, New Haven Grand Prix, and more!",
              emojis: [["📅", "calendar"]],
            },
            {
              to: "/rides/group-rides",
              title: "Group Rides",
              blurb:
                "Find a group of other cyclists to ride with! There's a group ride for everyone, from chill cruises downtown to all-out racing!",
              emojis: [
                ["🚴🏽", "cyclist"],
                ["🚴🏾", "cyclist"],
                ["🚴🏻", "cyclist"],
              ],
            },
            {
              to: "/community/advocacy",
              title: "Advocacy and Infrastructure",
              blurb:
                "Help us promote cycling and cycling infrastructure in the Elm City.",
              emojis: [["🛣️", "motorway"]],
            },
            {
              to: "/community/volunteering",
              title: "Volunteering",
              blurb:
                "Learn about volunteering at the Bradley Street Bicycle Co-op and other organizations.",
              emojis: [["❤️", "heart"]],
            },
          ]}
        />
      </HeroCard>
      <HeroCard
        title="City Riding and Commuting"
        to="/commuting"
        colorClassName="green"
      >
        <p>Learn how to navigate the City of New Haven on your bike.</p>
        <SubCards
          cards={[
            {
              to: "/commuting/map",
              title: "Map of Bike Paths and Recommended Routes",
              blurb:
                "The fastest, safest, and most-fun ways to get through the city.",
              emojis: [["🏙️", "cityscape"]],
            },
            {
              to: "/commuting/bicycle-security",
              title: "Bicycle Security Tips",
              blurb:
                "Follow these basic rules to prevent your bike from getting stolen.",
              emojis: [["🔒", "locked"]],
            },
            {
              to: "/commuting/general-tips",
              title: "General Commuter Tips",
              blurb:
                "How can I carry things on my bike? How can I stay safe on the road? How can I ride my bike year-round?",
              emojis: [
                ["🎒", "backpack"],
                ["❄️", "snowflake"],
                ["🚘", "car"],
              ],
            },
            {
              to: "/commuting/bike-share",
              title: "Bike Share",
              blurb:
                "Don't own a bicycle? No problem! Pick up a rental from any of the bike share stations around town.",
              emojis: [
                ["📱", "phone"],
                ["🚲", "bicycle"],
                ["🚲", "bicycle"],
              ],
            },
          ]}
        />
      </HeroCard>
      <HeroCard title="Recreational Rides" to="/rides" colorClassName="purple">
        <p>For body and mind.</p>
        <SubCards
          cards={[
            {
              to: "/rides/routes",
              title: "Road Routes and Route Finder",
              blurb:
                "Find the perfect route for your next bike ride, from 5 to 100 miles!",
              emojis: [["📍", "pin"]],
            },
            {
              to: "/rides/group-rides",
              title: "Group Rides",
              blurb:
                "Find a group of other cyclists to ride with! There's a group ride for everyone, from chill cruises downtown to all-out racing!",
              emojis: [
                ["🚴🏽", "cyclist"],
                ["🚴🏾", "cyclist"],
                ["🚴🏻", "cyclist"],
              ],
            },
            {
              to: "/rides/mountain-biking",
              title: "Mountain Biking",
              blurb: "Hit the local trails!",
              emojis: [["🚵‍♀️", "mountain biker"]],
            },
          ]}
        />
      </HeroCard>
      <HeroCard title="Bikes and Maintenance" to="/bikes" colorClassName="tan">
        <p>Bikes are beautiful (especially when maintained)!</p>
        <SubCards
          cards={[
            {
              to: "/bikes/fix-your-bike",
              title: "Get Your Bike Fixed!",
              blurb:
                "Find a bike shop, or learn how to do it yourself at the co-op!",
              emojis: [["👩‍🔧", "mechanic"]],
            },
            {
              to: "/bikes/purchase-a-bike",
              title: "Choosing a Bike to Purchase",
              blurb:
                "General recommendations for different budgets and types of riding.",
              emojis: [["💳", "credit card"]],
            },
            {
              to: "/bikes/bikes-of-new-haven",
              title: "Bikes of New Haven",
              blurb: "Check out our personal rides!",
              emojis: [["😍", "smiling face with heart eyes"]],
            },
          ]}
        />
      </HeroCard>
    </div>
  </Layout>
)

export default IndexPage
