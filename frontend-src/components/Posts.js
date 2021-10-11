import React, { useEffect, useState } from 'react'


export default function Posts() {

  const [posts, setPosts] = useState([])

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
              <div >
                {posts.map((post) => 
                  {post.name}
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )

}