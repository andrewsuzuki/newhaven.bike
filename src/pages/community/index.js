import React from "react"

import Layout, { Narrow } from "../../components/layout"
import SEO from "../../components/seo"
import CategoryPageListing from "../../components/category-page-listing"

const CommunityPage = () => (
  <Layout>
    <SEO title="Community" />
    <Narrow>
      <h1>Community</h1>
      <p>Connect with the New Haven cycling community!</p>
      <CategoryPageListing category="community" />
    </Narrow>
  </Layout>
)

export default CommunityPage
