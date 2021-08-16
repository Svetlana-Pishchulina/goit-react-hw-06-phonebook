import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const saveContactAction = createAction("saveConntact", (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));
const deleteContactAction = createAction("deleteConntact");
const updateFilterAction = createAction("updateFilter");

export default { saveContactAction, deleteContactAction, updateFilterAction };
