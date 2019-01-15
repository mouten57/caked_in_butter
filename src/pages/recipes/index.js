import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import Carousel from '../../components/RecipeCarousel';
import { Link } from 'gatsby';

//map cards for recipes
export default () => (
  <PageTemplate>
    <h1 className="page-title">Recipes page!</h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <Link to="/recipes/strawberry-donuts" style={{ display: 'inherit' }}>
        Strawberry Donuts{' '}
      </Link>
    </div>
    <Carousel />
  </PageTemplate>
);
