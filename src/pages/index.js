import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Form from "../components/form"
import Results from "../components/results"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form />
    <Results />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
