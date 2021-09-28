import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter, Link } from "react-router-dom"

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import config from '../utils/config'
import retailbanking from '../../contents/images/retailbanking.jpg'
import meenusgallery from '../../contents/images/meenusgallery.jpg'

export default function ProjectsIndex({ children }) {
  return (
    <Layout>
        <Blurb title="I'm Leeladhar Kompally.">
          <p>
            I'm a software engineer. This website is my digital workspace — a mixture of the things
            I've learned and done over the years.
          </p>
        </Blurb>
      </Layout>
  )
}
