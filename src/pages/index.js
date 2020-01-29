import { Container, Hero, HeroBody, Title, HeroFooter } from "bloomer"
import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
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
} from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero isColor="light" isHalfHeight={true}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Image />
          <Title tag="h1" isSize={1}>
            Eric Bartholemy
          </Title>
          <Title tag="h4" isSize={4}>
            Software Engineer, Hacker, and Lebenskuenstler
          </Title>
          <ul>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaGitlab />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaKeybase />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaMapMarkedAlt />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Gitlab">
                <FaMixcloud />
              </a>
            </li>
          </ul>
        </Container>
      </HeroBody>
      <HeroFooter>
        <Container hasTextAlign="centered">
          But sooner or later the man who wins, Is the one who thinks he can.
          <br />~ Walter D. Wintle
        </Container>
      </HeroFooter>
    </Hero>
  </Layout>
)

export default IndexPage
