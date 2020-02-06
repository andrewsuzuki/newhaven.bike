/**
 * Gatsby Node APIs
 * https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const edn = require("jsedn")

exports.onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createContentDigest,
  createNodeId,
  reporter,
}) => {
  const { createNode } = actions

  // Only handle routes.edn file node
  if (node.internal.type !== "File" || node.sourceInstanceName !== "routes") {
    return {}
  }

  const content = await loadNodeContent(node)

  let routesEdn = null
  try {
    routesEdn = edn.parse(content)
  } catch (error) {
    reporter.panicOnBuild("Error when parsing routes.edn", error)
    return
  }

  const routes = edn.toJS(routesEdn)

  // Create route nodes
  routes
    // Remove colons from EDN keywords
    .map(route =>
      Object.keys(route).reduce(
        (acc, k) => ({
          ...acc,
          [k.startsWith(":") ? k.substr(1) : k]: route[k],
        }),
        {}
      )
    )
    .forEach(route =>
      createNode({
        id: createNodeId(`route-${route.slug}`),
        parent: null,
        children: [],
        internal: {
          type: "Route",
          contentDigest: createContentDigest({ route }),
        },
        route,
      })
    )
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const routePageTemplate = path.resolve("./src/templates/route-page.js")

  // Get route nodes
  const result = await graphql(`
    {
      allRoute {
        edges {
          node {
            route {
              slug
              ride_with_gps
              stub
              source
              title
              distance
              climbing
              description
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  const routes = result.data.allRoute.edges.map(edge => edge.node.route)

  routes.forEach(route => {
    createPage({
      path: `/rides/routes/${route.slug}`,
      component: routePageTemplate,
      context: {
        route,
      },
    })
  })
}
