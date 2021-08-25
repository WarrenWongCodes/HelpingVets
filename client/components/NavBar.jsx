import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav id="navBar">
      <Link to={'/resources'}>Resources</Link>
      <Link to={'/about'}>About</Link>
    </nav>
  );
}
