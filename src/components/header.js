import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <h1 className="site-title">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" title="Home" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" title="About" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" title="Contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
