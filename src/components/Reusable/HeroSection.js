import React from 'react'
import BackgroundImage from 'gatsby-background-image'
const HeroSection = ({ img, title, subtitle, heroclass }) => {
  return (
    <BackgroundImage Tag='section' className={heroclass} fluid={img}>
      <h1 className='text-white text-uppercase text-center dispaly-4'>
        {title}
      </h1>
      <div>
        <h4 className='text-warning'>{subtitle}</h4>
      </div>
    </BackgroundImage>
  )
}

export default HeroSection
