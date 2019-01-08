import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Caked in Butter</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/form.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/button.min.css"
        />
      </Helmet>
    );
  }
}

export default Head;
