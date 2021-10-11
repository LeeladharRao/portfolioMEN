import React, { useEffect, useState } from 'react'


export default function Posts() {

  const [posts, setPosts] = useState([{
    title: 't1',
    content: 'c1'
  }])

  useEffect(() => {
    fetch("/blog").then(res => {
    }).then(jsonRes => setPosts(jsonRes));
  })

  return (
    <section>
      <section>
        <h2>2021</h2>
        <div class="posts">
          <div class="post" >
            <div class="post-row" href="#">
              <time>Jan 04</time>
              <div className="users">
                {(posts || []).map((p) => (
                  <div>{p.title}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )

}