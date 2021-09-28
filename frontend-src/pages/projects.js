import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import config from '../utils/config'
import retailbanking from '../../contents/images/retailbanking.jpg'
import meenusgallery from '../../contents/images/meenusgallery.jpg'

export default function ProjectsIndex({ children }) {
  return (
    <Layout>
      <Helmet title={`${config.siteTitle} | Projects`} />
      <div className="page">
        <header>
          <div className="container">
            <h1>Projects.</h1>
            <p className="subtitle">
              A few highlights of my open-source projects. View them all{' '}
              <a href="https://github.com/LeeladharRao">on GitHub</a>.
            </p>
          </div>
        </header>

        <div className="container">
          <section>
            <h2>Retail Banking Application</h2>
            <h4 className="no-underline">
              A Web Banking Application for banks.
            </h4>
            <p>
              <small>
                <i>
                  2020 &mdash; Flask, Python, MySQL, HTML, CSS & JavaScript
                </i>
              </small>
            </p>
            <a
              className="link-image"
              target="_blank"
            >
              <img src={retailbanking} />
              <br></br>
            </a>
            <p>
              Retail-Banking is a web application that serves individual customers, to manage their savings and current 
              accounts. Using the application, the users can view customer and account information and get account 
              transaction information.
            </p>
            <p>
              Retail banking was developed on Flask Framework and uses MySql for its database.
              It is hosted and run on the Heroku server.
            </p>
            <a
              href="https://github.com/LeeladharRao/RetailBanking"
              className="button"
            >
              Source
            </a>
          </section>

          <section>
            <h2>Meenu's Gallery</h2>
            <h4 className="no-underline">
              An page to view Artwork.
            </h4>
            <p>
              <small>
                <i>2019 &mdash; Flask, Python, HTML & JavaScript</i>
              </small>
            </p>
            <a
              className="link-image"
              target="_blank"
            >
              <img src={meenusgallery}/>
              <br></br>
            </a>
            <p>
              This is an art gallery page that I designed for my friend that showcases all her paintings and sketchings. 
              This was my first attempt at a real-world application using Flask so the code is all messy and held 
              together with duct tape.
            </p>
            <p>
              I wanted to teach myself how to make clean websites from scratch using the Flask application and using 
              Python Micro frameworks, object-oriented logic, HTML routes, JavaScript, and CSS styles, that incorporated 
              secure database connections.
            </p>
            <a href="https://github.com/LeeladharRao/FriendsGalleryWebpage" className="button">
              Source
            </a>
          </section>

          <section>
            <h2>Indesign Website</h2>
            <h4 className="no-underline">
              An MVC framework from scratch in PHP.
            </h4>
            <p>
              <small>
                <i>2018 &mdash; PHP, MySQL</i>
              </small>
            </p>
            <p>
              In my time of working with custom PHP systems, I noticed a lot of
              extremely messy, haphazardly put-together code, code that had no
              sense of design or planning, and was also outdated and insecure.
            </p>
            <p>
              I wanted to teach myself how to make a clean system using MVC
              design patterns and clear separation of concerns between the PHP
              object-oriented logic, HTML routes, JavaScript interactions, and
              CSS styles, that also utilized the latest methods for secure
              database connections.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}
