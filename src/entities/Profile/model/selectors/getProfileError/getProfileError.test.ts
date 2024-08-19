import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("should return counter value", () => {
    const ERROR_VALUE = "true";

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: ERROR_VALUE
      }
    };
    expect(getProfileError(state as StateSchema)).toEqual(ERROR_VALUE);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
