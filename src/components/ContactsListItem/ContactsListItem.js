import { connect } from "react-redux";

import styles from "./ContactsListItem.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";

const ContactsListItem = ({ contacts, onDeleteButtonClick }) => {
  return contacts.map(({ id, name, number }) => (
    <li className={styles.listItem} key={id}>
      {name}:{number}
      <button className={styles.button} onClick={() => onDeleteButtonClick(id)}>
        Delete
      </button>
    </li>
  ));
};

const mapStateToProps = (state) => {
  const { contactsReduser, filterReducer } = state.contacts;
  const visibleContacts = contactsReduser.filter((contact) =>
    contact.name.toLowerCase().includes(filterReducer.toLowerCase())
  );
  return {
    contacts: visibleContacts,
    // contacts: state.contacts.contactsReduser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onDeleteButtonClick: (id) =>
    dispatch(contactsActions.deleteContactAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
