import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ title }) {
  return (
    <header className="App-header">
      <Link to="/" className="App-title">
        <h1>{title}</h1>
      </Link>
    </header>
  );
}

export default Header;