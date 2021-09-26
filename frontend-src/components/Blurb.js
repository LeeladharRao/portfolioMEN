import React from 'react'

import leela from '../../contents/images/img-logo1.jpg'

export default function Blurb({ title, children }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <img src={leela} alt="Leela" className="avatar" />
        </div>
      </div>
    </section>
  )
}
