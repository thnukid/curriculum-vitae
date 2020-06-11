import { Container, Hero, HeroBody, Title, HeroFooter } from "bloomer"
import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import Resume from "../components/resume"
import SEO from "../components/seo"
import {
  FaGitlab,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaKeybase,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMixcloud,
  FaGem,
  FaHtml5,
  FaCode,
  FaJs,
  FaCss3,
  FaPython
} from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Software Engineer" />
    <section class="hero is-dark is-fullheight is-bold is-medium cube__container">
      <div className="cube">
        <FaGithub />
      </div>
      <div className="cube">
        <FaGem />
      </div>
      <div className="cube">
        <FaJs />
      </div>
      <div className="cube">
        <FaPython />
      </div>
      <div className="cube">
        <FaGitlab />
      </div>
      <div className="cube">
        <FaHtml5 />
      </div>
      <HeroBody>
        <Container isFluid hasTextAlign="centered">
          <Image src="profile" />
          <br />
          <Title tag="h1" isSize={1}>
            Eric Bartholemy
          </Title>
          <Title tag="h3" isSize={3}>
            Software Engineer B.Sc.
          </Title>
          <Title tag="h6" isSize={6}>
            WWW, Ruby on Rails, Javascript, HTML5, CSS
          </Title>
        </Container>
      </HeroBody>
      <div id="scroll-down-animation">
        <span class="mouse">
          <span class="move" />
        </span>
        <small>Scroll down</small>
      </div>
    </section>
    <Resume />
  </Layout>
)

export default IndexPage
