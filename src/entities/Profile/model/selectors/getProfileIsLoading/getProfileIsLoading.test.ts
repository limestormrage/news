import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
  test("should return counter value", () => {
    const LOADING_VALUE = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: LOADING_VALUE
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(LOADING_VALUE);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
