import { useSelector, useDispatch } from "react-redux";

import styles from "./ContactsListItem.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";
import {
  getContactsReducer,
  getFilterReducer,
} from "../../redux/contacts/contacts-selection";

const ContactsListItem = () => {
  const contacts = useSelector((state) => {
    const contactsReducer = getContactsReducer(state);
    const filterReducer = getFilterReducer(state);
    const visibleContacts = contactsReducer.filter((contact) =>
      contact.name.toLowerCase().includes(filterReducer.toLowerCase())
    );
    return visibleContacts;
  });

  const dispatch = useDispatch();
  const onDeleteButtonClick = (id) =>
    dispatch(contactsActions.deleteContactAction(id));

  return contacts.map(({ id, name, number }) => (
    <li className={styles.listItem} key={id}>
      {name}:{number}
      <button className={styles.button} onClick={() => onDeleteButtonClick(id)}>
        Delete
      </button>
    </li>
  ));
};

export default ContactsListItem;
