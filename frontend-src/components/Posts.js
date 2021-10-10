import React from 'react'


export default function Posts() {


  const Cell = () => {

    return (
      <div>
      <a class="post new" href="redesign-version-5.html">
        <h3>Redesign: Version 5.0</h3>
        <div><time>Sep 02</time></div>
      </a>
      </div>


    )
  }


  return (
    <section>
      <section>
        <h2>2021</h2>
        <div className="posts">
          <Cell />
          <Cell />
        </div>
      </section>
    </section>
  )

}