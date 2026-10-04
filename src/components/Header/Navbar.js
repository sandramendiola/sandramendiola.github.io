import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/smendiola-cv">CV</Link>
      <a className="link" href="https://scholar.google.com/citations?hl=en&oi=ao&user=RuAHgscAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      <Link className="link" to="/community-engagement">Community Engagement</Link>
      <Link className="link" to="/contact-me">Contact Me</Link>
    </div>
  )
}

export default Navbar;