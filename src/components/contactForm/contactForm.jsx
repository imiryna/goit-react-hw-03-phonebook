import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  ContactFormCss,
  Description,
  InputFormCss,
  ButtonCss,
} from './contactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputTelId = nanoid();

  handleInputContacts = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContacts = ev => {
    ev.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ContactFormCss onSubmit={this.handleAddContacts}>
        <Description htmlFor={this.inputNameId}>
          Name
          <InputFormCss
            onChange={this.handleInputContacts}
            type="text"
            name="name"
            value={this.state.name}
            id={this.inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Description>
        <Description htmlFor={this.inputTelId}>
          Number
          <InputFormCss
            onChange={this.handleInputContacts}
            type="tel"
            name="number"
            value={this.state.number}
            id={this.inputTelId}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Description>
        <ButtonCss type="submit">Add contacts</ButtonCss>
      </ContactFormCss>
    );
  }
}
