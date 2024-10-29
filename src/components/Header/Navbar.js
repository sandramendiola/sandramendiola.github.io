import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/smendiola-cv">CV</Link>
      <Link className="link" to="/publications">Publications</Link>
      <Link className="link" to="https://scholar.google.com/citations?hl=en&oi=ao&user=RuAHgscAAAAJ">Google Scholar</Link>
    </div>
  )
}

export default Navbar;