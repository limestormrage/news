import { PayloadAction } from "@reduxjs/toolkit";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

const DATA_VALUE = {
  username: "admin",
  age: 22,
  country: Country.Russia,
  lastname: "limestormrage",
  first: "Dmitry",
  currency: Currency.RUB
};

describe("profileSlice", () => {
  test("set readOnly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(false))).toEqual({
      readonly: false
    });
  });
  test("set authData", () => {
    const state: DeepPartial<ProfileSchema> = { data: DATA_VALUE };
    expect(profileReducer(state as ProfileSchema, profileActions.setAuthData(DATA_VALUE))).toEqual({
      data: DATA_VALUE
    });
  });
  test("set cancelEdit", () => {
    const state: DeepPartial<ProfileSchema> = { data: DATA_VALUE };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data: DATA_VALUE,
      validateErrors: undefined,
      form: DATA_VALUE
    });
  });
  test("updateProfile", () => {
    const NEW_NAME = "test";

    const state: DeepPartial<ProfileSchema> = {
      form: { first: NEW_NAME }
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: NEW_NAME }))
    ).toEqual({
      form: { first: NEW_NAME }
    });
  });
  test("updateProfile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined
    });
  });
  test("updateProfile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: []
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.fulfilled(DATA_VALUE, ""))
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: [],
      form: DATA_VALUE,
      data: DATA_VALUE
    });
  });
  test("updateProfile service rejected", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: []
    };

    const action: PayloadAction<ValidateProfileError[]> = {
      type: updateProfileData.rejected.type,
      payload: [ValidateProfileError.SERVER_ERROR]
    };

    expect(profileReducer(state as ProfileSchema, action)).toEqual({
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    });
  });
});
