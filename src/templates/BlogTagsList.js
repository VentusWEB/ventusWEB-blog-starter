import React from 'react'
import { Link, graphql } from 'gatsby'

import { Seo } from 'components/common'

import { Layout } from 'components/theme'



class BlogTagsListIndex extends React.Component {
  render() {
    const { data } = this.props
/*     const siteTitle = data.site.siteMetadata.title */
    const posts = data.allWpVentuswebstarterblog.edges
    const { currentPage, numTagPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numTagPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout >
{/*         <Seo
          title={siteTitle}

        /> */}

        {posts.map(({ node }) => {

          return (
              <div>
                  <h1>{node.blogPostTitle}</h1>
                  {node.blogPostTitle.blogPostTags.checkboxValueOptions.map(item => (
                  <p>TAGS: {item}  </p>
                  ))}

              </div>
/*             <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div> */
          )
        })}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numTagPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: "10px",
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogTagsListIndex

export const pageQuery = graphql`
  query blogPageTagsQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allWpVentuswebstarterblog(
        sort: { fields: [date], order: DESC }
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            slug
            date
            blogPostTitle
            blogPostExcerpt
            blogPostTags {
                checkboxValueOptions  {
                  value
                }
              }
          }
        }
      }
   
  }
`