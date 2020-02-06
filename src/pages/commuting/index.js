import React from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"
import CategoryPageListing from "../../components/category-page-listing"

const CommutingPage = () => (
  <Layout>
    <SEO title="City Riding and Commuting" />
    <Narrow>
      <h1>City Riding and Commuting</h1>
      <p>Learn how to navigate the City of New Haven on your bike.</p>
      <CategoryPageListing category="commuting" />
    </Narrow>
  </Layout>
)

export default CommutingPage
