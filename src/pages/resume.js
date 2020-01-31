import React from "react"
import Moment from "react-moment"
import resumeData from "../../content/resume.json"
import {
  HeroFooter,
  Tabs,
  TabsList,
  TabList,
  Tab,
  TabLink,
  Title,
  Container,
  Hero,
  HeroBody,
  Tag,
  Content,
  Media,
  MediaLeft,
  MediaContent,
  Image,
} from "bloomer"

import Img from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ListTags = ({ tags, isColor }) => {
  return tags.map((tag, index) => {
    return (
      <>
        <Tag isColor={isColor}>{tag}</Tag>{" "}
      </>
    )
  })
}

const ListHighlights = ({ highlights }) => {
  return (
    <ul>
      {highlights.map((highlight, index) => {
        return <li>{highlight}</li>
      })}
    </ul>
  )
}

const companyImagePath = companyName => {
  const imageNameSrc = companyName.toLocaleLowerCase().replace(" ", "_")
  return ["companies", imageNameSrc].join("/")
}

const ResumeMediaObject = ({
  title,
  subTitle,
  href,
  ariaLabel,
  startDate,
  endDate,
  summary,
  highlights,
  children,
}) => {
  return (
    <Media>
      <MediaLeft>
        <Img src={companyImagePath(subTitle)} isSize="64x64" />
      </MediaLeft>
      <MediaContent>
        <Content>
          <b>{title}</b>
          <br />
          <a href={href} aria-label={ariaLabel}>
            {subTitle}
          </a>
          <br />
          <small>
            <Moment format="MMM YYYY" parse="YYYY-MM-DD" interval={0}>
              {startDate}
            </Moment>
            {" - "}
            {endDate ? (
              <Moment format="MMM YYYY" parse="YYYY-MM-DD" interval={0}>
                {endDate}
              </Moment>
            ) : (
              "present"
            )}{" "}
            &middot;{" "}
            {endDate ? (
              <Moment duration={startDate} date={endDate} />
            ) : (
              <Moment duration={startDate} date={Date.now()} />
            )}
          </small>
          <p>{summary}</p>
          {children}
        </Content>
      </MediaContent>
    </Media>
  )
}

const workExperiences = resumeData => {
  return resumeData.work
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .map((workPlace, index) => {
      return (
        <ResumeMediaObject
          title={workPlace.position}
          subTitle={workPlace.name}
          href={workPlace.url}
          ariaLabel={workPlace.name}
          startDate={workPlace.startDate}
          endDate={workPlace.endDate}
          summary={workPlace.summary}
        >
          <ListHighlights highlights={workPlace.highlights} />
        </ResumeMediaObject>
      )
    })
}

const voluenteering = resumeData => {
  return resumeData.volunteer
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .map((volunteered, index) => {
      return (
        <ResumeMediaObject
          title={volunteered.position}
          subTitle={volunteered.organization}
          href={volunteered.url}
          ariaLabel={volunteered.name}
          startDate={volunteered.startDate}
          endDate={volunteered.endDate}
          summary={volunteered.summary}
          highlights={volunteered.highlights}
        >
          <ListHighlights highlights={volunteered.highlights} />
        </ResumeMediaObject>
      )
    })
}

const projects = resumeData => {
  return resumeData.projects
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .map((project, index) => {
      return (
        <Media>
          <MediaLeft>
            <Img src={companyImagePath(project.entity)} isSize="64x64" />
          </MediaLeft>
          <MediaContent>
            <Content>
              <a href={project.url} aria-label={project.name}>
                {project.company}
              </a>
              {" / "}
              <b>{project.industry}</b>
              <br />
              <small>
                <Moment format="MMM YYYY" parse="YYYY-MM-DD" interval={0}>
                  {project.startDate}
                </Moment>
                {" - "}
                <Moment format="MMM YYYY" parse="YYYY-MM-DD" interval={0}>
                  {project.endDate}
                </Moment>
              </small>
              <br />
              <ListTags tags={project.roles} isColor="light" />
              <ListTags tags={project.keywords} isColor="primary" />
              <p>{project.summary}</p>
            </Content>
          </MediaContent>
        </Media>
      )
    })
}

const educations = resumeData => {
  return resumeData.education.map((edu, index) => {
    return (
      <div>
        {edu.studyType}
        <br />
        {edu.institution}
        <br />
        {edu.area}
        <ul>
          {edu.courses.map((course, index) => (
            <li>{course}</li>
          ))}
        </ul>
      </div>
    )
  })
}

const certificates = resumeData => {
  return resumeData.certificate.map((certified, index) => {
    return (
      <div>
        <a href={certified.verification} aria-label={certified.name}>
          {certified.name} - {certified.code}
        </a>
        {certified.website}
        {certified.grantDate}
        {certified.endDate}
      </div>
    )
  })
}
const skills = resumeData => {
  return resumeData.skills.map((skill, index) => {
    return (
      <div>
        {skill.name}
        {skill.level}
        <ul>
          {skill.keywords.map((keyword, index) => (
            <li>{keyword}</li>
          ))}
        </ul>
      </div>
    )
  })
}

const basics = resumeData => {
  return (
    <>
      <HeroTitel
        title={resumeData.basics.name}
        subTitle={resumeData.basics.label}
      >
        {profiles(resumeData)}
      </HeroTitel>
    </>
  )
}

const profiles = resumeData => {
  return resumeData.basics.profiles.map((profile, index) => {
    return (
      <>
        <a
          key={[profile.network, index].join("-")}
          href={profile.url}
          aria-label={profile.network}
        >
          <Tag isColor="primary" isSize="medium">
            {profile.network}
          </Tag>
        </a>{" "}
      </>
    )
  })
}
const HeroTitel = ({ title, subTitle, children }) => {
  return (
    <Hero isColor="light">
      <HeroBody>
        <Container hasTextAlign="centered">
          <Img src="profile" />
          <Title tag="h1" isSize={1}>
            {title}
          </Title>
          <Title tag="h4" isSize={4}>
            {subTitle}
          </Title>
          {children}
        </Container>
      </HeroBody>
      <HeroFooter>
        <Tabs isBoxed isFullWidth>
          <Container isFluid>
            <TabList>
              <Tab>
                <TabLink href="#experience">Work Experience</TabLink>
              </Tab>
              <Tab>
                <TabLink href="#volunteer">Volunteer</TabLink>
              </Tab>
              <Tab>
                <TabLink href="#projects">Projects</TabLink>
              </Tab>
              {false ? (
                <div>
                  <Tab>
                    <TabLink href="#education">Education</TabLink>
                  </Tab>
                  <Tab>
                    <TabLink href="#certificates">Certificates</TabLink>
                  </Tab>
                  <Tab>
                    <TabLink href="#skills">Skills</TabLink>
                  </Tab>
                </div>
              ) : null}
            </TabList>
          </Container>
        </Tabs>
      </HeroFooter>
    </Hero>
  )
}
const resume = () => (
  <Layout>
    <SEO title="Resume" />
    {basics(resumeData)}
    <br />
    <br />
    <Container isFluid isMarginless>
      <a name="experience" />
      <Hero isColor="info">
        <HeroBody>
          <Title>Work Experience</Title>
        </HeroBody>
      </Hero>
      <br />
      <Content>{workExperiences(resumeData)}</Content>

      <a name="projects" />
      <Hero isColor="info">
        <HeroBody>
          <Title>Projects</Title>
        </HeroBody>
      </Hero>
      <br />
      <Content>{projects(resumeData)}</Content>

      <a name="volunteer" />
      <Hero isColor="info">
        <HeroBody>
          <Title>Volunteer</Title>
        </HeroBody>
      </Hero>
      <br />
      <Content>{voluenteering(resumeData)}</Content>

      {false ? (
        <div>
          <a name="education" />
          <Hero isColor="info">
            <HeroBody>
              <Title>Education</Title>
            </HeroBody>
          </Hero>
          <br />
          <Content>{educations(resumeData)}</Content>

          <a name="certificates" />
          <Hero isColor="info">
            <HeroBody>
              <Title>Certificates</Title>
            </HeroBody>
          </Hero>
          <br />
          <Content>{certificates(resumeData)}</Content>

          <a name="skills" />
          <Hero isColor="info">
            <HeroBody>
              <Title>Skills</Title>
            </HeroBody>
          </Hero>
          <br />
          <Content>{skills(resumeData)}</Content>
        </div>
      ) : null}
    </Container>
  </Layout>
)
export default resume
