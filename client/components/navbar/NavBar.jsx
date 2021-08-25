import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <nav id="navBar">
      <Link className="navBarLinks" to={'/resources'}>
        Resources
      </Link>
      <Link className="navBarLinks" to={'/about'}>
        About
      </Link>
    </nav>
  );
}
