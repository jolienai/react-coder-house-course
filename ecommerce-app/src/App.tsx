import React from 'react';
import {Navbar, NavbarItem} from './components/Navbar/Navbar'

const App: React.FC = () => {
  const cartItemCount: number = 0;
  const logourl: string = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600';
  const items: NavbarItem[] = [
    {
      id : 1,
      title: "Eletronics",
      link: "/"
    },
    {
      id : 2,
      title: "Accessories",
      link: "/"
    },
    {
      id : 3,
      title: "TVs",
      link: "/"
    },
    {
      id : 4,
      title: "Mobile",
      link: "/"
    }
  ]
  
  return (
    <>
      <div>
        <Navbar items={items} logourl={logourl} cartItemCount={cartItemCount}/>
      </div>
    </>
  );
};

export default App;
