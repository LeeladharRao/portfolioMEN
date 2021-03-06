import React from 'react'

import facebook from '../../contents/images/facebook-64px.png'
import github from '../../contents/images/github--64px.png'
import linkedin from '../../contents/images/linkedin-64px.png'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="flex justify-center">
          <a
            href="https://www.facebook.com/"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={facebook} className="footer-img" alt="Facebook" />
          </a>
          <a
            href="https://github.com/LeeladharRao"
            title="Open-source on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={github} className="footer-img" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={linkedin} className="footer-img" alt="LinkedIn" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
