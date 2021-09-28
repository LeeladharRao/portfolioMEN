import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link} from "react-router-dom"

import ProjectsIndex from "./pages/projects"
import Home from "./pages/home"
import AboutmeIndex from "./pages/aboutme"

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
      <Route exact path="/" component={Home} />  
      <Route exact path="/projects" component={ProjectsIndex} />
      <Route exact path="/aboutme" component={AboutmeIndex} />  
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
