/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'
import Footer from './Reusable/Footer'

import './bootstrap.min.css'

import './layout.css'

const Layout = ({ children }) => (
  <>
    {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
