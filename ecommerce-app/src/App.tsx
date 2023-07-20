import React from 'react';
import {Menu, MenuItem} from './components/Menu';

const App: React.FC = () => {
  const menuItems: MenuItem[] = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Shop', link: '/shop' },
    { id: 3, name: 'Contact', link: '/contact' },
  ];

  return (
    <div>
      <h1>eCommerce Website</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default App;
