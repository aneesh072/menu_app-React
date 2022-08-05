import './App.css';
import React, { useState, useEffect } from 'react';
import items from '../src/components/data.js';
import Menu from './components/Menu';
import Catagories from './components/Catagories';

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categoeies, setCategoeies] = useState([]);

  return (
    <main>
      <section className="menu-section"></section>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"> </div>
      </div>
      <Catagories />
      <Menu items={menuItems} />
    </main>
  );
};

export default App;
