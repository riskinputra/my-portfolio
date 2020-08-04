import React from 'react'

import './styles.scss'

function Skills() {

  const skills1 = [
    {
      name: 'HTML / CSS / LESS / SASS / SCSS',
      width: 90
    },
    {
      name: 'JQuery',
      width: 90
    },
    {
      name: 'Javascirpt',
      width: 85
    },
    {
      name: 'Vue.js',
      width: 85
    },
    {
      name: 'NUXT js',
      width: 80
    },
    {
      name: 'REACT js',
      width: 80
    },
    {
      name: 'NEXT js',
      width: 80
    },
    {
      name: 'Svelte js',
      width: 75
    }
  ]

  const skills2 = [
    {
      name: 'Node js / Express Js',
      width: 75
    },
    {
      name: 'Typescript',
      width: 70
    },
    {
      name: 'Webpack',
      width: 80
    },
    {
      name: 'Grunt',
      width: 75
    },
    {
      name: 'Git',
      width: 80
    },
    {
      name: 'Jest',
      width: 70
    }
  ]

  const contentSkill1 = skills1.map((skill, index) => (
    <li className="skills-item" key={index}>
      <p>{skill.name}</p>
      <div className="skills-bar">
        <span style={{width: `${skill.width}%`}}></span>
      </div>
    </li>
  ))

  const contentSkill2 = skills2.map((skill, index) => (
    <li className="skills-item" key={index}>
      <p>{skill.name}</p>
      <div className="skills-bar">
        <span style={{width: `${skill.width}%`}}></span>
      </div>
    </li>
  ))

  return (
    <section className="skills" id="skills">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="title">
            <h1>My Skills</h1>
            <div>What i do</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <ul className="content">
            {contentSkill1}
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <ul className="content">
            {contentSkill2}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
