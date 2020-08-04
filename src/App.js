import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        as
      </div>
    </Router>
  )
}

export default App;
