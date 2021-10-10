import React from 'react'


export default function Posts() {


  const Cell = () => {

    return (
      <div className="post" >
        <Link to="/post1">
          <div className="post-row">
            <h3>titile</h3>
            <div><time>Jun 23</time></div>
          </div>
        </Link>
      </div>
      
      
    )
  }


  return (
    <section>
      <h2>2021</h2>
      <div className="posts">
          <Cell />
          <Cell />
      </div>
    </section>
  )

}