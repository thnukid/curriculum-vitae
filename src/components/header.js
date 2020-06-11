import { Link } from "gatsby"
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  Container,
} from "bloomer"
import {
  FaGitlab,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaKeybase,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMixcloud,
} from "react-icons/fa"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <nav
      class="navbar is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <Container isFluid>
        <NavbarBrand>
          <NavbarItem>{siteTitle}</NavbarItem>
          <NavbarBurger
            className={open ? "is-active" : ""}
            onClick={() => setOpen(prevOpen => !prevOpen)}
          />
        </NavbarBrand>
        <NavbarMenu className={open ? "is-active" : ""}>
          <NavbarStart>
            <Link to="#experience" className="navbar-item">
              <div className="">Workplaces</div>
            </Link>
            <Link to="#projects" className="navbar-item">
              <div className="">Consulting</div>
            </Link>
          </NavbarStart>
          <NavbarEnd>
            <a
              href="https://gitlab.com/thnukid"
              target="_blank"
              aria-label="Gitlab"
              class="navbar-item"
            >
              <FaGitlab />
            </a>
            <a
              href="https://github.com/thnukid"
              target="_blank"
              aria-label="Github"
              class="navbar-item"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/bartholemy"
              target="_blank"
              aria-label="Linkedin"
              class="navbar-item"
            >
              <FaLinkedin />
            </a>
            <a
              aria-label="Gitlab"
              href="https://keybase.io/thnukid"
              target="_blank"
              class="navbar-item"
            >
              <FaKeybase />
            </a>
            <a
              target="_blank"
              class="navbar-item"
              href="mailto:eric@kabisa.nl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              target="_blank"
              class="navbar-item"
              href="https://mixcloud.com/thnukid"
              aria-label="Mixcloud"
            >
              <FaMixcloud />
            </a>
          </NavbarEnd>
        </NavbarMenu>
      </Container>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
