import React from 'react';
import Layout from './layout';
import './page-template.css';

export default props => {
  return (
    <Layout>
      <main className="content">
        <article className="page">
          <div className="entry-content">{props.children}</div>
        </article>
      </main>
    </Layout>
  );
};
