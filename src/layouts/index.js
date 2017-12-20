import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import Footer from '../components/Footer'
import "./index.scss"
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'


class Template extends React.Component {
  componentDidMount() {
    const WOW = require('wowjs')
    this.wow = new WOW.WOW()
    this.wow.init()
  }

  componentDidUpdate() {
    this.wow.sync()
  }

  render() {
    const { location, children } = this.props
    return (
      <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
          {children()}
        <Footer/>
      </div>
    )
  }
}

export default Template