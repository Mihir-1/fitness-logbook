import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logbook from './components/pages/Logbook';
import Stats from './components/pages/Stats'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Logbook />} />
        <Route path='/stats' element={<Stats/>} />
      </Routes>
    </Router>
  );
}

export default App;