import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Wrap = styled.div`
  display: block;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #edad2d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const PageTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 0;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrap>
      <PageTitle>{siteTitle}</PageTitle>
    </Wrap>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
