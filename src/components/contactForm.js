import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        name: '',
        email: '',
        message: ''
      }
    };
  }

  handleChange = e => {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Form action="https://formspree.io/cakedinbutter@gmail.com" method="POST">
        <Form.Group inline widths="equal">
          <Form.Input
            fluid
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label="Message"
          name="message"
          value={message}
          placeholder="Leave me note!"
          onChange={this.handleChange}
        />
        <input type="submit" value="Send" />
      </Form>
    );
  }
}

export default ContactForm;
