import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Page Not Found" />
    <h1>404 Page Not Found</h1>
    <p>
      That page doesn't exist.{" "}
      <Link to="/" title="Home">
        Click here
      </Link>{" "}
      to go home.
    </p>
  </Layout>
)

export default NotFoundPage
