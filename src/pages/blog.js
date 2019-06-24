import React from "react"
import Layout from "../components/Layout"
import Images from "../examples/Images.jsx"
import StyledHero from "../components/StyledHero.jsx"
import { graphql } from "gatsby"
//
//

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <Images />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
