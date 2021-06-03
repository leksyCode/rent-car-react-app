import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../../api/contacts";
import "../App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function ContactsController() {
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get();
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>    
        <Switch>
          <Route
            path="/contacts"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/contacts/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/contacts/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contacts/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default ContactsController;
