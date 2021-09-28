import React from 'react'
import { Link } from "react-router-dom"

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
            <Link to="/projects" className="nav-link" activeClassName="active">
                Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>

  )
}
