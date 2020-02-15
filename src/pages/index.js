import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Results from "../components/results"
import Summary from "../components/summary"
import styled from 'styled-components'

import wattsImg from '../images/watts.png'
import deviceImg from '../images/device.png'
import dailyUseImg from '../images/daily_use.png'

const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: white;

  &:focus {
    outline: none;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;

  img {
    margin-right: 15px;
    margin-bottom: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form />
    <Results />
    <Summary />
    <InputGroup>
      <img src={wattsImg} alt="watts" />
      <Input />
    </InputGroup>
    <InputGroup>
      <img src={deviceImg} alt="watts" />
      <Input />
    </InputGroup>
    <InputGroup>
      <img src={dailyUseImg} alt="watts" />
      <Input />
    </InputGroup>
  </Layout>
)

export default IndexPage
