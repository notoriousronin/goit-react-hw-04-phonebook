import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactName
      ),
    }));
  };

  addContactItem = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.checkTheName(newContact);
  };

  checkTheName = newContact => {
    const { contacts } = this.state;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already exist`);
        return;
      }
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContactItem} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
