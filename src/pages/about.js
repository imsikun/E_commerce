import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import Dualinfoblock from '../components/Reusable/Dualinfoblock'
import TeamPhoto from '../components/About/TeamPhoto'

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title='Home' />
    <HeroSection
      // as 'data' is coming as default from the graphql query so we are passing data as a prop
      img={data.fileName.childImageSharp.fluid}
      title='About Learn Code Online'
      heroclass='about-background'
    />
    <Dualinfoblock
      heading='A message from CEO'
      imgSrc='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    />
    <Infoblock heading='Our Vision' />
    <TeamPhoto />
  </Layout>
)

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
