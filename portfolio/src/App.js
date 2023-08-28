import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Body from './Body';
import NavBar from './Navbar';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Resume from './Resume'; 

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <Body />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/resume" element={<Resume /> } />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
