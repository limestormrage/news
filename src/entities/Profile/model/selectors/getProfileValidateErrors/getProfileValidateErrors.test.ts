import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors", () => {
  test("should return counter value", () => {
    const ERRORS = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: ERRORS
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(ERRORS);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
