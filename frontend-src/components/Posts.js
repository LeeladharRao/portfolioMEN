import React from 'react'


export default function Posts() {


  const Cell = () => {

    return (
      <a class="post" href="www.google.com">
        {/* <Link to="/post1"> */}
          <h3>titile</h3>
          <div><time>Jun 23</time></div>
        {/* </Link> */}
      </a>


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