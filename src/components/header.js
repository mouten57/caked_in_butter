import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import headerLogo from '../../content/assets/header-logo.png';

const Header = props => (
  <StaticQuery
    query={graphql`
      query HeaderLogo {
        file(relativePath: { eq: "header-logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header>
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
          {props.menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: 'none',
                margin: '0px 4vw'
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#444444',
                  fontFamily: 'Noto Serif KR',
                  fontSize: '12px'
                }}
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </nav>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/">
            <img
              src={headerLogo}
              style={{
                margin: '0 auto',
                display: 'centered',
                maxHeight: '70vw',
                maxWidth: '500px'
              }}
              alt="logo"
            />
          </a>
        </div>
      </header>
    )}
  />
);
export default Header;
