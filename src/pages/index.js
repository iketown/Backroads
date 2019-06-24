import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner.jsx"
import About from "../components/Home/About.jsx"
import Services from "../components/Home/Services.jsx"
import StyledHero from "../components/StyledHero.jsx"
import { graphql } from "gatsby"

//
//

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Continue Exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam magni recusandae quam suscipit? Sed non modi odio perspiciatis id!"
        >
          <AniLink fade to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
