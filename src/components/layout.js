import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <div className="sticky-push">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="main">{children}</main>
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} newhaven.bike &middot; By{" "}
        <a href="https://andrewsuzuki.com" title="Andrew Suzuki">
          Andrew Suzuki
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
