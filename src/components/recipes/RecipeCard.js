//to be used on /recipes (index page)
//goal is to map out cards for every recipe entry
import React from 'react';
import Img from 'gatsby-image';
import EntryHeader from '../recipes/entryHeader';
import './RecipeCard.css';

export default props => (
  <div className="recipe-card" style={{ width: '100%' }}>
    <a href={props.slug}>
      <div style={{ justifyContent: 'center' }}>
        <Img
          fixed={props.fixed}
          style={{ display: 'inherit', margin: '0 auto', maxWidth: '100%' }}
        />
      </div>

      <EntryHeader category={props.category} title={props.title} />
    </a>
  </div>
);
