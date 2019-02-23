import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const header = props => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderLogo {
          file(relativePath: { eq: "header-logo.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(maxWidth: 900, quality: 100) {
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
                    fontSize: '10px',
                    letterSpacing: '3px'
                  }}
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </nav>
          <div>
            {props.headerImg ? (
              <a href="/" style={{ display: 'inherit' }}>
                <Img
                  fadeIn={false}
                  fluid={data.file.childImageSharp.fluid}
                  style={{
                    display: 'inherit',
                    maxWidth: '400px',
                    margin: '15px auto'
                  }}
                  alt="logo"
                />
              </a>
            ) : null}
          </div>
        </header>
      )}
    />
  );
};

export default header;
