import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';

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

  addContact = contact => {
    const isInContacts = this.state.contacts.find(c => c.name === contact.name);
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    const newContact = { ...contact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          handleDelete={this.deleteContact}
        />
      </div>
    );
  }
}
