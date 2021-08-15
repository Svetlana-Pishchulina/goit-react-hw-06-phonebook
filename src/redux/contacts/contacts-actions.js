import shortid from "shortid";
import actionTypes from "./contacts-actionTypes";

const saveContactAction = (name, number) => ({
  type: actionTypes.SAVE_CONTACT,
  payload: { name, number, id: shortid.generate() },
});

const deleteContactAction = (contactId) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

const updateFilterAction = (value) => ({
  type: actionTypes.UPDATE_FILTER,
  payload: value,
});

export default { saveContactAction, deleteContactAction, updateFilterAction };
