import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './contactForm.css';
import FormErrors from './FormErrors';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        name: '',
        email: '',
        message: ''
      },
      formErrors: {},
      nameValid: false,
      emailValid: false,
      messageValid: false,

      formValid: false
    };
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let { nameValid, emailValid, messageValid } = this.state;

    switch (fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '' : ' is too short';
        break;
      case 'email':
        emailValid = value.length >= 4;
        fieldValidationErrors.email = emailValid ? '' : ' is too short';
        break;

      case 'message':
        messageValid = value.length >= 5;
        fieldValidationErrors.message = messageValid ? '' : ' is too short';
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid,
        emailValid,
        messageValid
      },
      this.validateForm
    );
  }
  validateForm() {
    let { nameValid, emailValid, messageValid } = this.state;

    this.setState({
      formValid: nameValid && emailValid && messageValid
    });
  }

  handleChange = e => {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState(
      {
        formFields
      },
      this.validateField(e.target.name, e.target.value)
    );
  };

  render() {
    console.log(this.state);
    const { name, email, message } = this.state;
    return (
      <div>
        <FormErrors formErrors={this.state.formErrors} />

        <Form
          action="https://formspree.io/cakedinbutter@gmail.com"
          method="POST"
          style={{ textAlign: 'center' }}
        >
          <div className="form-input">
            <label>Name</label>
            <input
              width="10"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <label>Message</label>
            <textarea
              rows="4"
              label="Message"
              name="message"
              value={message}
              placeholder="Leave me a note!"
              onChange={this.handleChange}
            />
          </div>

          <input
            type="submit"
            value="Send"
            className="form-submit-button"
            disabled={!this.state.formValid}
          />
        </Form>
      </div>
    );
  }
}

export default ContactForm;
