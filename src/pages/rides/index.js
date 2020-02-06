import React from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"
import CategoryPageListing from "../../components/category-page-listing"

const RidesPage = () => (
  <Layout>
    <SEO title="Recreational Rides" />
    <Narrow>
      <h1>Recreational Rides</h1>
      <p>Explore Connecticut by bike, with or without a group.</p>
      <CategoryPageListing category="rides" />
    </Narrow>
  </Layout>
)

export default RidesPage
