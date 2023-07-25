import React from 'react';
import { Navbar as RSNavbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

export type NavbarItem = {
  id: number;
  name: string;
  link: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <RSNavbar>
      <NavbarBrand href="/">eCommerce Website</NavbarBrand>
      <Nav navbar>
        {items.map((item) => (
          <NavItem key={item.id}>
            <NavLink href={item.link}>{item.name}</NavLink>
          </NavItem>
        ))}
      </Nav>
      <ShoppingCart/>
    </RSNavbar>
  );
};

