import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contentPages from "../content-pages.json"

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
    {cards.map(({ to, title, subtitle, emojis }) => (
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
        {subtitle && <span className="subtitle">{subtitle}</span>}
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
          cards={contentPages
            .filter(p => p.category === "community")
            .concat([contentPages.find(p => p.to === "/rides/group-rides")])
            .filter(a => a)}
        />
      </HeroCard>
      <HeroCard
        title="City Riding and Commuting"
        to="/commuting"
        colorClassName="green"
      >
        <p>Learn how to navigate the City of New Haven on your bike.</p>
        <SubCards
          cards={contentPages.filter(p => p.category === "commuting")}
        />
      </HeroCard>
      <HeroCard title="Recreational Rides" to="/rides" colorClassName="purple">
        <p>Explore Connecticut by bike, with or without a group.</p>
        <SubCards cards={contentPages.filter(p => p.category === "rides")} />
      </HeroCard>
      <HeroCard title="Bikes and Maintenance" to="/bikes" colorClassName="tan">
        <p>Bikes are beautiful (especially when maintained)!</p>
        <SubCards cards={contentPages.filter(p => p.category === "bikes")} />
      </HeroCard>
    </div>
  </Layout>
)

export default IndexPage
