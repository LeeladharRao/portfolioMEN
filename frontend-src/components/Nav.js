import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"


import ProjectsIndex from '../pages/projects'
import App from '../pages/index'

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
          <Switch>
          
          <Route path="/secret">
            <ProjectsIndex />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
          </div>
        </div>
      </div>
    </nav>
  )
}
