import React from 'react';
import RecipeCarousel from '../components/RecipeCarousel';

import '../components/recipeCarousel.css';
import './index.css';
import '../components/page-template.css';
import PageTemplate from '../components/PageTemplate';

export default () => {
  return (
    <PageTemplate headerImg={true}>
      <RecipeCarousel />
    </PageTemplate>
  );
};
