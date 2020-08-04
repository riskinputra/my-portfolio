import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Home from 'containers/Home'
import About from 'containers/About'
import Skills from 'containers/Skills'
import Contact from 'containers/Contact'

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="container container-fluid">
          <Home />
          <About />
          <Skills />
          <Contact />
        </div>
      </div>
    </Router>
  )
}

export default App;
