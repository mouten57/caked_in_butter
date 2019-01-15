import React from 'react';
import index from '../../components/recipes/recipeIndex';

export default props => (
  <header className="entry-header">
    <p className="entry-meta">{props.category}</p>
    <span className="entry-divider" />
    <h1 className="entry-title">{props.title}</h1>
  </header>
);
