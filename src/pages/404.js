import React from "react"
import { Link } from "gatsby"

import Layout, { Narrow } from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Page Not Found" />
    <Narrow>
      <h1>404 Page Not Found</h1>
      <p>
        That page doesn't exist.{" "}
        <Link to="/" title="Home">
          Click here
        </Link>{" "}
        to go home.
      </p>
    </Narrow>
  </Layout>
)

export default NotFoundPage
