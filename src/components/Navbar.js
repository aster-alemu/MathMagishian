import React from 'react';
import '../App.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'quote', text: 'quote' },
  { path: 'calculator', text: 'Calculator' },
];
const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links-list">
      {links.map((link) => (
        <li style={{ color: '#fff', textDecoration: 'none', textAlign: 'right' }} key={link.text}>
          <a className="nav-links" href={link.path}>{link.text}</a>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
