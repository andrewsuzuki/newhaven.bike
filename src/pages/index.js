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
              to: "/community/events",
              title: "Events",
              blurb: "TODO",
              emojis: [["📅", "calendar"]],
            },
            {
              to: "/rides/group-rides",
              title: "Group Rides",
              blurb: "TODO",
              emojis: [
                ["🚴🏽", "cyclist"],
                ["🚴🏾", "cyclist"],
                ["🚴🏻", "cyclist"],
              ],
            },
            {
              to: "/community/advocacy",
              title: "Advocacy and Infrastructure",
              blurb: "TODO",
              emojis: [["🛣️", "motorway"]],
            },
            {
              to: "/community/volunteering",
              title: "Volunteering",
              blurb: "TODO",
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
        <p>Learn how to navigate the City of New Haven with your bike.</p>
        <SubCards
          cards={[
            {
              to: "/commuting/map",
              title: "Map of Bike Paths and Recommended Routes",
              blurb: "TODO",
              emojis: [["🏙️", "cityscape"]],
            },
            {
              to: "/commuting/bicycle-security",
              title: "Bicycle Security Tips",
              blurb: "TODO",
              emojis: [["🔒", "locked"]],
            },
            {
              to: "/commuting/general-tips",
              title: "General Commuter Tips",
              blurb: "TODO",
              emojis: [
                ["🎒", "backpack"],
                ["❄️", "snowflake"],
                ["🚘", "car"],
              ],
            },
            {
              to: "/commuting/bike-share",
              title: "Bike Share",
              blurb: "TODO",
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
        <p>TODO</p>
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
              blurb: "TODO",
              emojis: [
                ["🚴🏽", "cyclist"],
                ["🚴🏾", "cyclist"],
                ["🚴🏻", "cyclist"],
              ],
            },
            {
              to: "/rides/mountain-biking",
              title: "Mountain Biking",
              blurb: "TODO",
              emojis: [["🚵‍♀️", "mountain biker"]],
            },
          ]}
        />
      </HeroCard>
      <HeroCard title="Gear and Maintenance" to="/gear" colorClassName="tan">
        <p>TODO</p>
        <SubCards
          cards={[
            {
              to: "/gear/fix-your-bike",
              title: "Get Your Bike Fixed!",
              blurb: "TODO",
              emojis: [["👩‍🔧", "mechanic"]],
            },
            {
              to: "/gear/purchase-a-bike",
              title: "Choosing a Bike to Purchase",
              blurb: "TODO",
              emojis: [["💳", "credit card"]],
            },
          ]}
        />
      </HeroCard>
    </div>
  </Layout>
)

export default IndexPage
