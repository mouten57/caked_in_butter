//to be used on /recipes (index page)
//goal is to map out cards for every recipe entry
import React from 'react';
import Img from 'gatsby-image';
import EntryHeader from '../recipes/entryHeader';

export default props => (
  <div className="recipe-card">
    <a href={props.slug}>
      <div style={{ display: 'grid', justifyContent: 'center' }}>
        <Img
          fixed={props.fixed}
          style={{ display: 'inherit', margin: '0 auto' }}
        />
      </div>
    </a>
    <EntryHeader category={props.category} title={props.title} />
  </div>
);
