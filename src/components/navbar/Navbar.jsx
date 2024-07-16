import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="smartsync__navbar">
      <div className="smartsync__navbar-links">
       
        <div className="smartsync__navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#smartsync">SMARTSYNC</a></p>
          <p><a href="#possibility">ALGORITHM</a></p>
          <p><a href="#features">WORKING</a></p>
          <p><a href="#blog">ABOUT US</a></p>
        </div>
      </div>
      <div className="smartysnc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="smartsync__navbar-menu_container scale-up-center">
          <div className="smartsync__navbar-menu_container-links">
            <p><a href="#home">HOME</a></p>
            <p><a href="#wgpt3">SMARTSYNC</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">WORKING</a></p>
            <p><a href="#blog">ABOUT US</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
