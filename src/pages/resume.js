import React from "react"
import resumeData from "../../content/resume.json"
import Layout from "../components/layout"
import { Content } from 'bloomer'

const workExperiences = (resumeData) => {
  return resumeData.work.map((workPlace, index) => {
        return(<div>
          <a href={workPlace.url} aria-label={workPlace.name}>
            {workPlace.name} - {workPlace.location}
          </a>
          <b>{workPlace.position}</b>
          <br/>
          <i>{workPlace.startDate} - {workPlace.endDate}</i>
          <br/>
          <p>{workPlace.description}</p>
          <ul>
            {workPlace.highlights.map((highlight, index) => {
              return(<li>{highlight}</li>);
            })}
          </ul>
          <br/>
          </div>);
      });
}

const voluenteering = (resumeData) => {
  return resumeData.volunteer.map((volunteered, index) => {
    return(<div>
      <a href={volunteered.url} aria-label={volunteered.name}>
        {volunteered.organization}
      </a>
      <b>{volunteered.position}</b>
      <br/>
      <i>{volunteered.startDate} - {volunteered.endDate}</i>
      <br/>
      <br/>
      <p>{volunteered.summary}</p>
      <ul>
        {volunteered.highlights.map((highlight, index) => {
          return(<li>{highlight}</li>);
        })}
      </ul>
      <br/>
      </div>);
  });
}


const projects = (resumeData) => {
  return resumeData.projects.map((project, index) => {
    return(<div>
      <a href={project.url} aria-label={project.name}>
        {project.name}
      </a>
      <i>{project.startDate} - {project.endDate}</i>
      <p>{project.description}</p>
      Technologies
      <ul>
        {project.keywords.map((keyword, index) => <li>{keyword}</li>)}
      </ul>
      Position
      <ul>
        {project.roles.map((role, index) => <li>{role}</li>)}
      </ul>
      </div>);
  });
}

const educations = (resumeData) => {
    return resumeData.education.map((edu, index) => {
        return(<div>
            {edu.studyType}
            <br/>
            {edu.institution}
            <br/>
            {edu.area}
            <ul>
              {edu.courses.map((course, index) => <li>{course}</li>)}
            </ul>
          </div>);
      });
}

const certificates = (resumeData) => {
  return resumeData.certificate.map((certified, index) => {
    return(<div>
      <a href={certified.verification} aria-label={certified.name}>
        {certified.name} - {certified.code}
      </a>
        {certified.website}
        {certified.grantDate}
        {certified.endDate}
      </div>);
  });
}
const skills = (resumeData) => {
  return resumeData.skills.map((skill, index) => {
    return(<div>
      {skill.name}
      {skill.level}
        <ul>
          {skill.keywords.map((keyword, index) => <li>{keyword}</li>)}
        </ul>
      </div>);
  });
}

const basics = (resumeData) => {
  return(<>
    <h1>{resumeData.basics.name}</h1>
    <h4>{resumeData.basics.label}</h4>
    {resumeData.basics.location.city}{' '}
    ({resumeData.basics.location.countryCode},{' '}
    {resumeData.basics.location.region})
    <Content>
      <p>{resumeData.basics.summary}</p>
    </Content>
    </>
  );
}

const profiles = (resumeData) => {
  return (
    <ul>
      {resumeData.basics.profiles.map((profile, index) => {
      return(<li key={[profile.network, index].join('-')}>
              <a href={profile.url} aria-label={profile.network}>
                {profile.username}
              </a>
             </li>);
        })}
   </ul>);
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
