import React, { useEffect } from 'react';
import NavBar4 from './Navbar/NavBar4.js';
import { useState } from "react";
import Header from "./Header.js"
import AddContact from "./AddContact.js"
import ContactList from "./ContactList.js"
import { v4 as uuid } from 'uuid';


const Hero = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div >
      <div style={{
        width: '40vw', marginLeft: '450px', background: "rgba(126, 194, 127, 0.25)",
        padding: "20px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(6.5px)",
        WebkitBackdropFilter: "blur(6.5px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>

    </div>

  )
}

export default Hero;
