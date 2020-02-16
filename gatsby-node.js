const path = require(`path`)
const defaultComponentPath = path.resolve(`./src/templates/blog-post.js`)
const yearComponentPath = path.resolve(`./src/templates/year.js`)

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: defaultComponentPath,
            context: {
                slug: node.fields.slug
            },
        })
    })
  })



  const years = graphql(`
    {
	  allDirectory(filter: {name: { regex: "/^20..$/" }}) {
		  edges {
			node {
			  name
			}
		  }
      }
    }
  `).then(result => {
      console.log(result)
      result.data.allDirectory.edges.forEach(({ node }, index)=> {
          console.log(node.name)
          createPage({
            path: node.name,
            component: yearComponentPath,
            context: { dir: "/pages\\/" + node.name + "/" },
          })
    })
  })

  return Promise.all([years]);

}
