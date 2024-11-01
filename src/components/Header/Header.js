import React from 'react';
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="name">Sandra Y Mendiola</div>
        <Navbar />
        <HamburgerMenu />
      </div>
    </>
  )
}

export default Header