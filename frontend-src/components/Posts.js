import React from 'react'


export default function Posts() {


  const Cell = () => {

    return (
      <div className="post" >

          <div className="post-row">
            <time>Jan 04</time>
            <h3>title</h3>
          </div>

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