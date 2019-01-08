import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Header = ({ siteTitle, menuLinks }) => (
  <StaticQuery
    query={graphql`
      query HeaderLogoQuery {
        file(relativePath: { eq: "header-logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 365) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
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
            {menuLinks.map(link => (
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
          <div>
            <Img
              style={{
                margin: '0 auto',
                display: 'inherit',
                paddingTop: '100px',
                paddingBottom: '50px'
              }}
              fixed={data.file.childImageSharp.fixed}
              alt="logo"
            />
          </div>
        </header>
      </React.Fragment>
    )}
  />
);
export default Header;
