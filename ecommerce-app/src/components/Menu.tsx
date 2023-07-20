import React from 'react';

export type MenuItem = {
  id: number;
  name: string;
  link: string;
};

type MenuProps = {
  items: MenuItem[];
};

export const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
