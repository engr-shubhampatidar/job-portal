import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Hari",
    image: "u should know",
  },
];

export const shortListReducer = createSlice({
  name: "shortList",
  initialState,
  reducers: {
    addToShortList: (state, action) => {
      const newCandidate = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
      };
      state.push(newCandidate);
    },
  },
});

export const { addToShortList } = shortListReducer.actions;
export default shortListReducer.reducer;
