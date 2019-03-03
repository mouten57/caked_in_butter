import React from 'react';
import RecipeCarousel from '../components/RecipeCarousel';
import PageTemplate from '../components/PageTemplate';
import IndexRecipeGrid from '../components/recipes/indexRecipeGrid';
import '../components/recipeCarousel.css';
import './index.css';
import '../components/page-template.css';

export default () => {
  return (
    <PageTemplate headerImg={true}>
      <RecipeCarousel />
      <IndexRecipeGrid />
    </PageTemplate>
  );
};
