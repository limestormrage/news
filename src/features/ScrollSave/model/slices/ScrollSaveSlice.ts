import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
  scroll: {}
};

export const ScrollSaveSlice = createSlice({
  name: "ScrollSave",
  initialState,
  reducers: {
    setScroll: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position;
    }
  }
});

export const { actions: scrollSaveSliceActions } = ScrollSaveSlice;
export const { reducer: scrollSaveSliceReducer } = ScrollSaveSlice;
