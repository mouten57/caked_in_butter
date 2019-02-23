import React from 'react';
import PageTemplate from '../components/PageTemplate';
import ContactForm from '../components/contactForm';

const contact = props => (
  <PageTemplate headerImg={true}>
    <h1 className="page-title" style={{ paddingTop: '55px' }}>
      Contact Page!
    </h1>
    <ContactForm />
  </PageTemplate>
);
export default contact;
