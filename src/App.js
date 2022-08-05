import './App.css';
import React, { useState } from 'react';
import items from '../src/components/data.js';
import Menu from './components/Menu';
import Catagories from './components/Catagories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategoeies] = useState(allCategories);

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
      <Catagories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
};

export default App;
