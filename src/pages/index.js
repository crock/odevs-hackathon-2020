import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Results from "../components/results"
import Summary from "../components/summary"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main style={{marginTop: 25}}>
      <Form />
      <Results />
      <Summary />
    </main>
  </Layout>
)

export default IndexPage
