import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Carousel from '../components/imageCarousel';

export default () => (
  <PageTemplate>
    <div>
      <h1 className="page-title">Recipes page!</h1>
    </div>
    <Carousel />
  </PageTemplate>
);
