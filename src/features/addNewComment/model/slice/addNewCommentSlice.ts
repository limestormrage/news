import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addNewCommentSchema } from "../types/addNewComment";

const initialState: addNewCommentSchema = {
  text: "",
  error: null
};

export const addNewCommentSlice = createSlice({
  name: "addNewComment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
