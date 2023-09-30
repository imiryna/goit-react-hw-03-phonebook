import React, { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { Text } from './contactForm/contactForm.styled';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const parsedContacts = JSON.parse(contacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      Notiflix.Notify.info(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContactById = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filteringContacts = filteredList => {
    this.setState(() => ({
      filter: [...filteredList],
    }));
  };

  render() {
    return (
      <>
        <Text>Phonebook</Text>
        <ContactForm state={this.state} addContact={this.addContact} />
        <Text>Contacts</Text>
        <Filter
          contactData={this.state.contacts}
          storeFiltered={this.filteringContacts}
        />
        <ContactList
          contacts={this.state.filter ? this.state.filter : this.state.contacts}
          removeById={this.removeContactById}
        />
      </>
    );
  }
}
