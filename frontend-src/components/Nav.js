import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import { Link } from 'gatsby-link'

import ProjectsIndex from '../pages/projects'
import GatsbyLink from 'gatsby-link'

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="grid">
          <div>
            <Link to="/" className="brand">
              <span className="emoji">
              </span>{' '}
              Leeladhar Kompally
            </Link>
          </div>

          <div className="menu-item">
              <Router>
                <Switch>
                  <Route exact path='/projects' />
                    <ProjectsIndex />
                </Switch>
              </Router>
              <Link to="/projects">Projects</Link>
            <Link to="/me">About me</Link>
            {/* <Link to="/me">About me</Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
