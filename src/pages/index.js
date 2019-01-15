import React from 'react';
import Layout from '../components/layout';
import RecipeCarousel from '../components/RecipeCarousel';
import '../components/recipeCarousel.css';

export default () => {
  return (
    <Layout>
      <RecipeCarousel />
      <div style={{ textAlign: 'center' }}>
        <hr />
        <div style={{ margin: '0 auto' }} />
        <p style={{ textAlign: 'center' }}>
          Stay in touch on{' '}
          <a href="https://www.twitter.com/cakedinbutter">Twitter</a> and{' '}
          <a href="https://www.instagram.com/cakedinbutter">Instagram</a>
        </p>
      </div>
    </Layout>
  );
};
