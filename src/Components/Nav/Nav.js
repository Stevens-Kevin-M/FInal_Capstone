import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <ul className='nav-links'>
      <Link style={navStyle} to={'/'}>
        <li>Home</li>
        </Link>
        <Link style={navStyle} to={'/search'}>
        <li>Search</li>
        </Link>
        <Link style={navStyle} to={'/signin'}>
        <li>Sign In / Sign Out</li>
        </Link>
        <Link style={navStyle} to={'/mustplay'}>
        <li>Must Play Games</li>
        </Link>
      </ul>
    </nav>
  );
}