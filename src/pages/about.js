import React from "react"

import Layout, { Narrow } from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Narrow>
      <h1>About</h1>
      <p>
        <strong>newhaven.bike</strong> is the front page for cycling in New
        Haven, CT.
      </p>
    </Narrow>
  </Layout>
)

export default AboutPage
