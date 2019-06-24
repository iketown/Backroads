import React from "react"
import { StaticQuery, graphql as gql } from "gatsby"

export const query = gql`
  query newQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        console.log("data", data)
        const { title, author } = data.site.siteMetadata
        return (
          <div>
            hello people
            <h4>title: {title}</h4>
            <h4>author: {author}</h4>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
