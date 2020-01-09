import React, { useState, useEffect } from 'react';

import Link from '../../atoms/link/Link.jsx'

import './header.scss'

const Header = props => {
  const [navItems, setNavItems] = useState([
    { url: 'file:///Users/A15EB4C/Projects/webpack-config-poc/dist/index.html', name: 'Home' },
    { url: 'file:///Users/A15EB4C/Projects/webpack-config-poc/dist/pdp.html', name: 'PDP' },
    { url: 'file:///Users/A15EB4C/Projects/webpack-config-poc/dist/plp.html', name: 'PLP' }
  ]);

  useEffect(() => {
    if (props.data) {
      setNavItems(JSON.parse(props.data));
    }
  }, []);

  return (
    <header>
      <nav>
        <ul>
          {navItems.map(item => (
            <li>
              <Link target={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
