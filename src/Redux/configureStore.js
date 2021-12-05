import { configureStore } from "@reduxjs/toolkit";
import addToShortList from "./shortListReducer";
import addToRejectList from "./rejectListReducer";

export const store = configureStore({
  reducer: {
    shortlist: addToShortList,
    rejectlist: addToRejectList,
  },
});
