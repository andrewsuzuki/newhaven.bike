import React from "react"

import Layout, { Narrow } from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Narrow>
      <h1>Contact</h1>
      <p>
        Comments or suggestions? Please send me a message at my website{" "}
        <a
          href="https://andrewsuzuki.com/contact"
          title="Contact Andrew Suzuki"
        >
          here
        </a>
        .
      </p>
    </Narrow>
  </Layout>
)

export default ContactPage
