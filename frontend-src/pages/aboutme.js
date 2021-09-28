import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import config from '../utils/config'

export default function AboutmeIndex() {
  return (
    <Layout>
      <Helmet title={`${config.siteTitle} | About Me`} />
      <header>
        <div class="container">
          <h1>About me.</h1>
          <p class="subtitle">I'm Leeladhar, software engineer, who loves to fiddle with software.</p>
        </div>
      </header>
      <section>
        <div class="container page">
          <div>
            <p>Hey, I'm Leela! I'm a software engineer from India, and I use data to make the world a better place. 
              This is my place on the web that I've created to show the world.</p>
            <p>By trade, I am a QA Test Automation developer. I build and write scripts to automate software Application 
              testing process and also have done a bit of web designing work too. Along my way, I've picked up enough 
              related tech to handle frontend, backend, database administration, and even a touch of design.</p>   
             {/* <p>My current weapon of choice is Python, but I believe in using the best tool for the job. If you enjoy long 
              lists of keywords, here are a few that I've worked with most recently: Python, Java, Flask, Cucumber, 
              Junit, Pytest, Linux. In the past, I've also worked with Dreamweaver, HTML, CSS, PHP ecosystems, sorry I 
              won't swamp you with more keywords.</p> */}
            <p>If you too love programming or just want to talk about nerdy things, you can contact me by email at 
              <strong>kompallyleeladhar@gmail.com</strong>. I always appreciate meeting new people.</p>
            <h3 id="hobbies" style="position:relative;"><a href="#hobbies" aria-label="hobbies permalink"
                class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1"
                  viewBox="0 0 16 16" width="16">
                  <path fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
                  </path>
                </svg></a>Hobbies.</h3>
            <p>There's a whole world out there outside of tech, but coding is my favorite
              hobby. I am pretty much open-minded towards all things, you can talk to me about anything and everything. 
              I love cooking, playing and watching football and l love motorsports.</p>
            <p>I like strategy and indie video games. Science, science fiction, animation stuff, Pokemon's, 
              modern engineering technology interests me, and I love binge-watching web content.</p>
            <h3 id="quotes" style="position:relative;"><a href="#quotes" aria-label="quotes permalink"
              class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1"
                viewBox="0 0 16 16" width="16">
                <path fill-rule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
                </path>
              </svg></a>Quotes.
            </h3>
            <blockquote class="groucho">
              <div>Best son I've ever had.</div><div class="firstQuote"><footer><a> My dad</a></footer></div>
            </blockquote>
            <blockquote class="groucho">
              <div>So handsome.</div><div class="secondQuote"><footer><a> My mom</a></footer></div>
            </blockquote>
            <blockquote class="groucho">
              <div>Realest person i've ever met in my life.</div><div class="thirdQuote"><footer><a> My best friend Anurudh</a></footer></div>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  )
}
