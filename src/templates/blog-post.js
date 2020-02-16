import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Years from "../components/years"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <div>
          <h2>{post.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Years />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
