import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import Layout from "../components/Layout"
import Blurb from "../components/Blurb"
import ProjectsIndex from "./projects"
import Home from "./home"

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

  const router = {

  }


  return (
    <BrowserRouter> 
      <h1>React Router Example</h1>  
      <Route exact path="/" component={Home} />  
      <Route exact path="/projects" component={ProjectsIndex} />  

    </BrowserRouter>

  )
}

ReactDOM.render(<App />, document.getElementById("app"))
