import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
export default () => (
    <StaticQuery
      query = {graphql`
          query {
            allDirectory {
              edges {
                node {
                  id
                  relativePath
                }
              }
            }
          }
        `}
    let year
    render={data => (
        <div>
            <span>Yearly Indexes: </span>
            {data.allDirectory.edges.filter(edge => {
                return edge.node.relativePath.match(/\/20..$/)
            }).sort().map(({ node }) => (
              
              <span
                key={node.id}>
                <Link
                  to={node.relativePath.split('/')[1]}
                  css={css`
                    padding: 0 2px;
                    text-decoration: none;
                    color: inherit;
                  `
                }
                >
                <span
                  css={css`
                                      margin-bottom: ${rhythm(1 / 4)};
                                                    `}
                >
                  {node.relativePath.split('/')[1]}
                </span>
                </Link>&#160;
              </span>

          ))}
        </div>
    )}
    />
)

