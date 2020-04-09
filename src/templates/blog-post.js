import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"
import Years from "../components/years"

const Date = styled.div`
    font-size: 8pt;
    color: #333;
    margin: 0;
    padding-top: 4px;
    margin-bottom: 9px;`


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <div>
          <h2>{post.frontmatter.title}</h2>
          <Date>{post.frontmatter.date}</Date>
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
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
