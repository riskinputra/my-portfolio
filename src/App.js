import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Home from 'containers/Home'
import About from 'containers/About'

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
        </div>
      </div>
    </Router>
  )
}

export default App;
