import React from 'react';
import NavBar from './Navbar';
import Body from './Body';
import Footer from './Footer';

const AppIcon = () => {
  return (
    <div className="app">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
};

export default AppIcon;
