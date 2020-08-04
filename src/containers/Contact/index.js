import React from 'react'

import './styles.scss'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="content">
            <div>
              <div className="content-tag">My</div>
              <h1 className="content-title">Contact</h1>
            </div>
            <div className="content-copyright">
              <span>&copy; riskinputra 2020 - v1.0</span>
            </div>
            <ul className="content-contact-list">
              <li>
                <a href="https://www.linkedin.com/in/riskinputra/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/riskinputra" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="email">
                <a href="mailto:riski.n.putra@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
