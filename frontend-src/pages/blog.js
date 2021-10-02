import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import config from '../utils/config'

export default function BlogIndex() {

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <header>
        <div className="container">
          <h1>Blog.</h1>
          <p className="subtitle">
            Posts, tutorials, snippets, musings, notes, and everything else. The
            archive of everything I've written.
          </p>
        </div>
      </header>
      <section>
        <div className="container">
        </div>
      </section>
    </Layout>
  )
}