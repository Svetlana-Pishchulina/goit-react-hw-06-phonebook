import React, { useState } from "react";
import { connect } from "react-redux";
// import shortid from "shortid";

import styles from "./Form.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";

const useForm = (key) => {
  const [state, setState] = useState("");

  return [state, setState];
};

const Form = ({ propOnSubmit }) => {
  const [name, setName] = useForm("name");
  const [number, setNumber] = useForm("number");

  // const id = shortid.generate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  // const currentContact = { name, number, id };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    propOnSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Nuber
          <input
            className={styles.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

// const mapStateToProps = (state) => {
//   if (state.contacts.contactsReduser.find((contact) => contact.name === name)) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
// };

const mapDispatchToProps = (dispatch) => ({
  propOnSubmit: (name, number) =>
    dispatch(contactsActions.saveContactAction(name, number)),
});
export default connect(null, mapDispatchToProps)(Form);
