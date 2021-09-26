import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"

import projects from '../pages/projects.js'

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
                  <Route path='/projects' component={projects} />Projects
                </Switch>
              </Router>
            {/* <Link to="/me">About me</Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
