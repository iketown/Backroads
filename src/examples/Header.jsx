import React from "react"
import { useStaticQuery, graphql as gql } from "gatsby"

export const query = gql`
  query getSiteData {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const { site } = useStaticQuery(query)
  const { title, author } = site.siteMetadata
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
    </div>
  )
}

export default Header
