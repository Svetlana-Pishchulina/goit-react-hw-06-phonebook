import { connect } from "react-redux";

import styles from "./Filter.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} value={value} onChange={onChange} />
    </label>
  );
};
const mapStateToProps = (state) => ({
  // value: state.filter,
  value: state.contacts.filterReducer,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.updateFilterAction(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
