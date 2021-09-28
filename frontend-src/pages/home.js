import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Blurb from '../components/Blurb'
import config from '../utils/config'

export default function Home({ children }) {
  return (
    <Layout>
      <Helmet title={`${config.siteTitle}`} />
        <Blurb title="I'm Leeladhar Kompally.">
          <p>
            I'm a software engineer. This website is my digital workspace — a mixture of the things
            I've learned and done over the years.
          </p>
        </Blurb>
    </Layout>
  )
}
