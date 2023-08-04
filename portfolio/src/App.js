import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Body from './Body';
import NavBar from './Navbar';
import Footer from './Footer';
import AppIcon from './AppIcon';



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/app-icon" element={<AppIcon />} />
        </Routes>
      </Router>
  );
}

export default App;
