import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly", () => {
  test("should return counter value", () => {
    const LOADING_VALUE = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: LOADING_VALUE
      }
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(LOADING_VALUE);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
