import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import CodePen from './svgs/codepen.svg'
import Dev from './svgs/dev.svg'
import CodeSandbox from './svgs/codesandbox.svg'
import s from './style.module.scss'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, email, description } = data.site.siteMetadata
        return (
          <div className={s.intro}>
            {description}
            <a href={`mailto:${email}`} className={s.link}>
              私に書く🖋
            </a>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        email
        description
      }
    }
  }
`

export default Bio
