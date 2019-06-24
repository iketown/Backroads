import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import bcg from "../images/connectBcg.jpeg"
import Img from "gatsby-image"
//
//

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = props => {
  const data = useStaticQuery(getImages)

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={bcg} className="basic" />
      </article>
      <article>
        <h3>fixed image</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto;
  article {
    border: 3px solid navy;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
`

export default Images
