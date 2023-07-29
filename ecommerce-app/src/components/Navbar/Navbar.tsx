import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

export type NavbarItem = {
  id: number;
  title: string;
  link: string;
};

type NavbarProps = {
  items: NavbarItem[];
  logourl: string;
  cartItemCount : number;
};

export const Navbar: React.FC<NavbarProps> = ({items, logourl, cartItemCount}) => {
  return (
    <header className="relative bg-white">
      {/* maybe this can be another component */}
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      <nav className="bg-gray-50 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}  
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={logourl}
                  alt=""
                />
              </a>
            </div>
            {/* Items */}  
            <ul className="flex space-x-4">
              {items.map((item) => (
              <li>
                <a href={item.link} className="text-gray-500 hover:text-gray-900">
                  {item.title}
                </a>
              </li>))}
              {/*  CartWidget */}
              <li>
                <CartWidget itemCount={cartItemCount}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
