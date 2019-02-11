import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import './style.css'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const subTitle = data.site.siteMetadata.subTitle
    const posts = data.allMarkdownRemark.edges

    return (
      <div className="layout">
        <SEO
          title={`${siteTitle} | ${subTitle}`}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Intro />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="entry" key={node.fields.slug}>
              <div className="side">
                <div className="date">{node.frontmatter.displayDate}</div>
              </div>
              <div className="title">{title}</div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
            </div>
          )
        })}
        <Footer />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年M月DD日")
            title
            displayDate
          }
        }
      }
    }
  }
`
