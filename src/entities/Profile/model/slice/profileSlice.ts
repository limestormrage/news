import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  readonly: true,
  error: null
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
    }
  }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
