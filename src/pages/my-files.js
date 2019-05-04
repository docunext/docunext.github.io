import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>Hello world</div>
      <table>
      <tbody>
	  {data.allFile.edges.map(({ node }, index) => (
	      <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.birthTime}</td>
          </tr>
      ))}
      </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
