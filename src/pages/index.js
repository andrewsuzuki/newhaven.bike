import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-cards">
      <div className="hero-card sky-blue">
        <h2>
          <Link to="/community" title="Community">
            Community
          </Link>
        </h2>
        <p>Connect with the New Haven cycling community!</p>
        <ul className="bulleted">
          <li>
            <Link to="/community/events" title="Events">
              Events{" "}
              <span role="img" aria-labelledby="calendar">
                📅
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              Group Rides{" "}
              <span role="img" aria-labelledby="bicycle">
                🚴🏽
              </span>
              <span role="img" aria-labelledby="bicycle">
                🚴🏾‍♀️
              </span>
              <span role="img" aria-labelledby="bicycle">
                🚴🏻
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/community/advocacy-and-infrastructure"
              title="Advocacy and Infrastructure"
            >
              Advocacy and Infrastructure{" "}
              <span role="img" aria-labelledby="motorway">
                🛣️
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hero-card neon-green">
        <h2>City Riding and Commuting</h2>
        <ul className="bulleted">
          <li>
            <Link to="#" title="TODO">
              Map of Bike Paths and Recommended Routes{" "}
              <span role="img" aria-labelledby="cityscape">
                🏙️
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              Bicycle Security Tips{" "}
              <span role="img" aria-labelledby="locked">
                🔒
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              General Commuter Tips{" "}
              <span role="img" aria-labelledby="backpack">
                🎒
              </span>
              <span role="img" aria-labelledby="snowflake">
                ❄️
              </span>
              <span role="img" aria-labelledby="car">
                🚘
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              Bike New Haven (Bike Share){" "}
              <span role="img" aria-labelledby="phone">
                📱
              </span>
              <span role="img" aria-labelledby="bicycle">
                🚲
              </span>
              <span role="img" aria-labelledby="bicycle">
                🚲
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hero-card purple">
        <h2>Recreational Rides</h2>
        <ul className="bulleted">
          <li>
            <Link to="#" title="TODO">
              Road Routes and Route Finder{" "}
              <span role="img" aria-labelledby="pin">
                📍
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              Group Rides{" "}
              <span role="img" aria-labelledby="bicycle">
                🚴🏽
              </span>
              <span role="img" aria-labelledby="bicycle">
                🚴🏾‍♀️
              </span>
              <span role="img" aria-labelledby="bicycle">
                🚴🏻
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              Mountain Biking{" "}
              <span role="img" aria-labelledby="mountain biker">
                🚵‍♀️
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hero-card red">
        <h2>Gear and Maintenance</h2>
        <ul className="bulleted">
          <li>
            <Link to="#" title="TODO">
              Get Your Bike Fixed!{" "}
              <span role="img" aria-labelledby="mechanic">
                👩‍🔧
              </span>
            </Link>
          </li>
          <li>
            <Link to="#" title="TODO">
              Choosing a Bike to Purchase{" "}
              <span role="img" aria-labelledby="credit card">
                💳
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
