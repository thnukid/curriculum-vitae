import { Footer, Column, Columns, Container, Content } from "bloomer"
import PropTypes from "prop-types"
import React from "react"

const FooterNav = ({ siteTitle }) => (
  <Footer id="footer">
    <Content isSize="small" hasTextAlign="centered">
      <p>
        © 2015 - {new Date().getFullYear()}
        {` `} {siteTitle}
        <br />
        All rights reserved.
      </p>
    </Content>
  </Footer>
)

FooterNav.propTypes = {
  siteTitle: PropTypes.string,
}

FooterNav.defaultProps = {
  siteTitle: ``,
}

export default FooterNav
