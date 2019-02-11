import React from 'react'
import { Link, graphql } from 'gatsby'

import Intro from '../components/Intro'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import './style.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <Intro /> */}
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        {/* <h1>{post.frontmatter.title}</h1> */}
        <p className="date">{post.frontmatter.displayDate}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        displayDate
      }
    }
  }
`
