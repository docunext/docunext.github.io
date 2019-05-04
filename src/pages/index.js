import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
      <Layout>
        <Helmet title={data.site.siteMetadata.title} defer={false} />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
				<Link
				  to={node.fields.slug}
				  css={css`
					text-decoration: none;
					color: inherit;
				  `
				}
				>
                <h3
                  css={css`
                                      margin-bottom: ${rhythm(1 / 4)};
                                                    `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                                      color: #bbb;
                                                      `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
				</Link>
              </div>
            ))}
        </div>
      </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 25) {
      totalCount
      edges {
        node {
          id
	      fields {
		    slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
