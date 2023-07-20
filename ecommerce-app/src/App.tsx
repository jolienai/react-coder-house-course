import React from 'react';
import {Navbar, NavbarItem} from './components/Navbar';

const App: React.FC = () => {
  const navbarItems: NavbarItem[] = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Shop', link: '/shop' },
    { id: 3, name: 'Contact', link: '/contact' },
    { id: 4, name: 'Login', link: '/login' },
  ];

  return (
    <>
      <div>
        <Navbar items={navbarItems} />
        <div className="container">
          {/* Rest of your application content goes here */}
        </div>
      </div>
    </>
  );
};

export default App;
