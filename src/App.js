import './App.css';
import React, { useState, useEffect } from 'react';
import items from '../src/components/data.js';
import Menu from './components/Menu';
import Catagories from './components/Catagories';

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categoeies, setCategoeies] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu-section"></section>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"> </div>
      </div>
      <Catagories filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
};

export default App;
