import React from "react"
import resumeData from "../../content/resume.json"
import Layout from "../components/layout"
import { Tag, Content, Media, MediaLeft, MediaContent, Image } from "bloomer"

const ListTags = tags => {
  return tags.map((tag, index) => {
    return (
      <>
        <Tag>{tag}</Tag>{" "}
      </>
    )
  })
}

const ListHighlights = highlights => {
  return (
    <ul>
      {highlights.map((highlight, index) => {
        return <li>{highlight}</li>
      })}
    </ul>
  )
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
        <Image isSize="64x64" src="https://via.placeholder.com/128x128" />
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
            {startDate} - {endDate}
          </small>
          <p>{summary}</p>
          {children}
        </Content>
      </MediaContent>
    </Media>
  )
}

const workExperiences = resumeData => {
  return resumeData.work.map((workPlace, index) => {
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
        {ListHighlights(workPlace.highlights)}
      </ResumeMediaObject>
    )
  })
}

const voluenteering = resumeData => {
  return resumeData.volunteer.map((volunteered, index) => {
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
        {ListHighlights(volunteered.highlights)}
      </ResumeMediaObject>
    )
  })
}

const projects = resumeData => {
  return resumeData.projects.map((project, index) => {
    return (
      <ResumeMediaObject
        title={project.name}
        subTitle={project.name}
        href={project.url}
        ariaLabel={project.name}
        startDate={project.startDate}
        endDate={project.endDate}
        summary={project.description}
      >
        Position
        <br />
        {ListTags(project.roles)}
        <br />
        <br />
        Technologies
        <br />
        {ListTags(project.keywords)}
      </ResumeMediaObject>
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
      <h1>{resumeData.basics.name}</h1>
      <h4>{resumeData.basics.label}</h4>
      {resumeData.basics.location.city} (
      {resumeData.basics.location.countryCode},{" "}
      {resumeData.basics.location.region})
      <Content>
        <p>{resumeData.basics.summary}</p>
      </Content>
    </>
  )
}

const profiles = resumeData => {
  return (
    <ul>
      {resumeData.basics.profiles.map((profile, index) => {
        return (
          <li key={[profile.network, index].join("-")}>
            <a href={profile.url} aria-label={profile.network}>
              {profile.username}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
const resume = () => (
  <Layout>
    <Content>
      <h3>Basics</h3>
      {basics(resumeData)}
    </Content>
    <Content>
      <h3>Profiles</h3>
      {profiles(resumeData)}
    </Content>
    <Content>
      <h3>Work Experience</h3>
      {workExperiences(resumeData)}
    </Content>
    <Content>
      <h3>Volunteer</h3>
      {voluenteering(resumeData)}
    </Content>
    <Content>
      <h3>Projects</h3>
      {projects(resumeData)}
    </Content>
    <Content>
      <h3>Education</h3>
      {educations(resumeData)}
    </Content>
    <Content>
      <h3>Certificates</h3>
      {certificates(resumeData)}
    </Content>
    <Content>
      <h3>Skills</h3>
      {skills(resumeData)}
    </Content>
  </Layout>
)
export default resume
