import React from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"
import CategoryPageListing from "../../components/category-page-listing"

const BikesPage = () => (
  <Layout>
    <SEO title="Bikes and Maintenance" />
    <Narrow>
      <h1>Bikes and Maintenance</h1>
      <p>Bikes are beautiful (especially when maintained)!</p>
      <CategoryPageListing category="bikes" />
    </Narrow>
  </Layout>
)

export default BikesPage
