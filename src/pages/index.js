import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroSection from '../components/Reusable/HeroSection'

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title='Home' />
    <HeroSection
      // as 'data' is coming as default from the graphql query so we are passing data as a prop
      img={data.fileName.childImageSharp.fluid}
      title='I write Code'
      subtitle='Learn Code Online'
      heroclass='hero-background'
    />
  </Layout>
)

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
