import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import App from '../pages/index'
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
