import React from 'react'
import { BrowserRouter, Route, Link, withRouter, Switch, Router } from "react-router-dom"


import ProjectsIndex from '../pages/projects'

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
            {/* <Link to="/projects" className="nav-link" activeClassName="active">
                Barksalot
            </Link> */}


              <Switch>
                <Route exact path="/projects" component={withRouter(ProjectsIndex)} />
              </Switch>

          </div>
        </div>
      </div>
    </nav>
  )
}
