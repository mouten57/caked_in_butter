import React from 'react';
import Layout from '../components/layout';
import RecipeCarousel from '../components/RecipeCarousel';

import '../components/recipeCarousel.css';
import './index.css';

export default () => {
  return (
    <Layout>
      <RecipeCarousel />
      <div className="index-container">
        <hr />
        <div className="index-links" />
        <p>
          Get Social!
          <br />
          <a className="link" href="https://www.twitter.com/cakedinbutter">
            Twitter
          </a>{' '}
          and{' '}
          <a className="link" href="https://www.instagram.com/cakedinbutter">
            Instagram
          </a>
        </p>
      </div>
    </Layout>
  );
};
