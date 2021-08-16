// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Filter.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";
import { getFilterReducer } from "../../redux/contacts/contacts-selection";

const Filter = () => {
  const value = useSelector(getFilterReducer);
  const dispatch = useDispatch();
  const onChange = (e) =>
    dispatch(contactsActions.updateFilterAction(e.target.value));
  return (
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} value={value} onChange={onChange} />
    </label>
  );
};
// const mapStateToProps = (state) => ({
//   // value: state.filter,
//   value: state.contacts.filterReducer,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(contactsActions.updateFilterAction(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
