import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logbook from './components/Logbook';
import Stats from './components/Stats'
import { Container } from '@mui/material';

function App() {

  return (
    <Router>
      {/* <CssBaseline /> */}
      <div>
        <Navbar />
        <Container sx={{ maxWidth: 500 }}>
          <Routes>
            <Route exact path='/' element={<Logbook />} />
            <Route path='/stats' element={<Stats />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;