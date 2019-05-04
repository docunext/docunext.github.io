import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
      <Layout>
        <Helmet title={data.site.siteMetadata.title} defer={false} />
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            Docunext is a blog by me, Albert Lash, featuring a collection of technical notes I have
            collected over a decade of working with mostly open source, networking and
            server software.
        </p>
      </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
