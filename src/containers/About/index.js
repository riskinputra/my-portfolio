import React from 'react'

import './styles.scss'

function About() {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="title">
            <div className="tag">A bit</div>
            <h1>About me</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="content">
            <div className="text">
              Innovative Front End Developer with 2 years experience building and maintaining responsive websites in the ATS (Applicant Tracking System) industry. Hacktiv8 certified. Proficient in HTML, CSS, jQuery and JavaScript, plus modern libraries and frameworks likes React and Vue.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
