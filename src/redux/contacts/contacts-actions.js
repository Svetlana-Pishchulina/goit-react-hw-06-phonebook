import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./contacts-actionTypes";

// const actionTypes = {
//   SAVE_CONTACT: "saveConntact",
//   DELETE_CONTACT: "deleteConntact",
//   UPDATE_FILTER: "updateFilter",
// };
const saveContactAction = createAction("saveConntact", (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));
const deleteContactAction = createAction("deleteConntact");
const updateFilterAction = createAction("updateFilter");

// const saveContactAction = (name, number) => ({
//   type: actionTypes.SAVE_CONTACT,
//   payload: { name, number, id: shortid.generate() },
// });

// const deleteContactAction = (contactId) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: contactId,
// });

// const updateFilterAction = (value) => ({
//   type: actionTypes.UPDATE_FILTER,
//   payload: value,
// });

export default { saveContactAction, deleteContactAction, updateFilterAction };
