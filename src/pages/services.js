import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import Dualinfoblock from '../components/Reusable/Dualinfoblock'

const ServicePage = ({ data }) => (
  <Layout>
    <Seo title='Home' />
    <HeroSection
      // as 'data' is coming as default from the graphql query so we are passing data as a prop
      img={data.fileName.childImageSharp.fluid}
      title='Our services'
      heroclass='service-background'
    />
    <Infoblock heading='Services that we Offer' />
    <Dualinfoblock
      heading='Our Services'
      imgSrc='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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

export default ServicePage
