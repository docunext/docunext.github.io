import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const Wrapper = styled("div")`
    padding: 10px;`

export default ({ children }) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return ( 
      <Wrapper>
          <Global 
            styles={css`
                h2 {
                    margin: 0;
                }
            `}
          />
          <div
            css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
            `}
          >
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to={`/`}>
                  <h1
                    css={css`
                    margin-top: 0;
                    margin-bottom: ${rhythm(1)};
                    display: inline-block;
                    font-style: normal;
                    `}
                  >
                    {data.site.siteMetadata.title} 
                  </h1>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink
                      to={`/about/`}
                      css={css`
                      float: right;
                      `}
                    >
                      About
                    </ListLink>
                </ul>
            </header>
            <hr />

            {children}
          </div>
      </Wrapper>
  )
}

