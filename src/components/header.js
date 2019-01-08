import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';

const Header = ({ siteTitle, menuLinks }) => {
  console.log(headerStyles);
  return (
    <nav
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f3f2',
        height: '71px'
      }}
    >
      {menuLinks.map(link => (
        <li
          key={link.name}
          className={headerStyles.nav_link}
          style={{
            listStyleType: 'none',
            margin: '0px 25px'
          }}
        >
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </nav>
  );
};

export default Header;
