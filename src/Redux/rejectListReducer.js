import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Hari",
    image: "u should know",
  },
];

export const rejectListReducer = createSlice({
  name: "rejectList",
  initialState,
  reducers: {
    addToRejectList: (state, action) => {
      const newCandidate = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
      };
      state.push(newCandidate);
    },
  },
});

export const { addToRejectList } = rejectListReducer.actions;
export default rejectListReducer.reducer;
