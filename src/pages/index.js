import React from 'react';

import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        Coming soon...
        <a href="https://www.cakedinbutter.com">CakedInButter.com</a>
        <hr />
        <div style={{ margin: '0 auto' }} />
        <p style={{ textAlign: 'center' }}>
          For now, stay in touch on{' '}
          <a href="https://www.twitter.com/cakedinbutter">Twitter</a> and{' '}
          <a href="https://www.instagram.com/cakedinbutter">Instagram</a>
        </p>
      </div>
    </Layout>
  );
};
