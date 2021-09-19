const path = require("path");
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "plugins"),
        "node_modules",
      ],
    },
  });
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allWpVentuswebstarterblog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (data.errors) {
    console.log("Error retrieving data", data.errors);
    return;
  }

  const singlePostTemplate = path.resolve("src/templates/BlogPage.js");

  data.data.allWpVentuswebstarterblog.edges.forEach((edge) => {
    createPage({
      path: `/wpis/${edge.node.slug}/`,
      component: singlePostTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
