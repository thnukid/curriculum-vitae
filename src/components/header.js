import { Link } from "gatsby"
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from "bloomer"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Navbar>
    <NavbarBrand>
      <NavbarItem>{siteTitle}</NavbarItem>
      <NavbarBurger />
    </NavbarBrand>
    <NavbarMenu>
      <NavbarStart></NavbarStart>
      <NavbarEnd>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/resume/" className="navbar-item">
          Resume
        </Link>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
