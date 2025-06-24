import React from 'react';
// Optional: create if you want separate styling

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f4f4f4', padding: '1rem 2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Store Front
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0 }}>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#cart">Cart 🛒</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
