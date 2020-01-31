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
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  return(
  <Navbar>
    <NavbarBrand>
      <NavbarItem>{siteTitle}</NavbarItem>
        <NavbarBurger
          className={(open ? 'is-active' : '')}
          onClick={() => setOpen(prevOpen => !prevOpen)}
        />
    </NavbarBrand>
      <NavbarMenu
        className={(open ? 'is-active' : '')}
      >
      <NavbarStart>
        </NavbarStart>
      <NavbarEnd>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/resume/" className="navbar-item">
          Resume
        </Link>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
