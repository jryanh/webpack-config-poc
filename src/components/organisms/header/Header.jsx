import React, { useState, useEffect } from 'react';

import Link from '../../atoms/link/Link.jsx'

const Header = props => {
  const [navItems, setNavItems] = useState([
    { url: '/', name: 'Home' },
    { url: '/pdp', name: 'PDP' },
    { url: '/plp', name: 'PLP' }
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
