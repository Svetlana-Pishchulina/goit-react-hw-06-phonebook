import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

const initialContactsState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsReduser = createReducer(initialContactsState, {
  [actions.saveContactAction]: (state, action) => {
    // console.log(state);
    // console.log(action.payload);
    return [...state, action.payload];
  },
  [actions.deleteContactAction]: (state, action) => {
    // console.log(state);
    return state.filter((contact) => contact.id !== action.payload);
  },
});
// const contactsReduser = (state = initialContactsState, action) => {
//   switch (action.type) {
//     case actionTypes.SAVE_CONTACT:
//       // if (state.find((contact) => contact.name === action.payload.name)) {
//       //   alert(`${action.payload.name} is already in contacts`);
//       //   return state;
//       // }
//       return [...state, action.payload];

//     case actionTypes.DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("", {
  [actions.updateFilterAction]: (state, action) => {
    // console.log(state);
    return action.payload;
  },
});
// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({ contactsReduser, filterReducer });
