import React from 'react'

import authorPhoto from './img/author.jpg'
import './styles.scss'

function Home() {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="author-photo">
            <div className="avatar avatar-extra-large">
              <img src={authorPhoto} alt="author" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="introduction">
            <div className="introduction-greeting">Hello, i'm</div>
            <div className="introduction-name">RISKI NUGROHO PUTRA</div>
            <div className="introduction-job">Frontend Engineer</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
