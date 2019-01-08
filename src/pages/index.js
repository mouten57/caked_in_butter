import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        Coming soon...
        <a href="https://www.cakedinbutter.com">CakedInButter.com</a>
        <hr />
        <div style={{ margin: '0 auto' }}>
          <Img
            style={{ margin: '0 auto', display: '' }}
            fixed={data.file.childImageSharp.fixed}
          />
        </div>
        <p style={{ textAlign: 'center' }}>
          For now, stay in touch on{' '}
          <a href="https://www.twitter.com/cakedinbutter">Twitter</a> and{' '}
          <a href="https://www.instagram.com/cakedinbutter">Instagram</a>
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "coming-soon.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
