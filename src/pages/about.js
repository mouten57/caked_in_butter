import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageTemplate from '../components/PageTemplate';

export default props => {
  console.log(props);
  return (
    <PageTemplate>
      <Img
        style={{ margin: '0 -43px' }}
        fluid={props.data.file.childImageSharp.fluid}
      />
      <h1 className="page-title">About</h1>

      <p />
      <p>Hello!</p>
      <p>
        This is just a placeholder line. This is just a placeholder line. This
        is just a placeholder line. This is just a placeholder line. This is
        just a placeholder line.{' '}
      </p>
      <p>
        Hello! This is just a placeholder line. This is just a placeholder line.
        This is just a placeholder line. This is just a placeholder line. This
        is just a placeholder line.{' '}
      </p>
      <p>
        Hello! This is just a placeholder line. This is just a placeholder line.
        This is just a placeholder line. This is just a placeholder line. This
        is just a placeholder line.{' '}
      </p>
    </PageTemplate>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "profile-placeholder.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
