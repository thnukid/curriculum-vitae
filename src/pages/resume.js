import React from "react"
import JSONData from "../../content/resume.json"
import Layout from "../components/layout"

const JSONbuildtime = () => (
  <Layout>
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{JSONData.basics.name}</h1>
      <ul>
        {JSONData.work.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.location}</li>
        })}
      </ul>
    </div>
  </Layout>
)
export default JSONbuildtime
