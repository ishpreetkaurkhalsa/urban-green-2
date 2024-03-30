// ContactList.js
import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={props.getContactId}
        key={contact.id}
      />
    );
  });

  return <div>{renderContactList}</div>;
};

export default ContactList;