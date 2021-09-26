import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
// import Home from "./components/Home"
// import Animal from "./components/Animal"
// import About from "./components/About"
// import Secret from "./components/Secret"
import Layout from "./components/Layout"
import Blurb from "./components/Blurb"

function App() {

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2 className="section-title">
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <BrowserRouter>
      <Layout>
        <Blurb title="I'm Tania Rascia.">
          <p>
            I'm a software engineer and writer. This website is my digital garden
            &mdash; a compendium of the things I've learned and created over the
            years.
          </p>
        </Blurb>
      </Layout>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
