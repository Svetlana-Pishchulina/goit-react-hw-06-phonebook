import React from "react";

import Section from "./components/Section";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import ContactsListItem from "./components/ContactsListItem";
import Filter from "./components/Filter";

function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);

  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("contacts")) {
  //     setContacts(JSON.parse(localStorage.getItem("contacts")));
  //   }
  // }, []);

  // useEffect(
  //   (prevState) => {
  //     if (contacts !== prevState) {
  //       localStorage.setItem("contacts", JSON.stringify(contacts));
  //     }
  //   },
  //   [contacts]
  // );

  // const formSubmitHandler = (data) => {
  //   if (contacts.find((contact) => contact.name === data.name)) {
  //     alert(`${data.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts((prevState) => [...prevState, data]);
  // };

  // const deleteContact = (deletedContactId) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== deletedContactId)
  //   );
  // };

  // const onChangeSearchInput = (evt) => {
  //   setFilter(evt.target.value);
  // };

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList>
          <ContactsListItem />
        </ContactsList>
      </Section>
    </>
  );
}
export default App;
