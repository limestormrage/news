import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileDate } from "./getProfileDate";

describe("getProfileData", () => {
  test("should return counter value", () => {
    const DATA_VALUE = {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "limestormrage",
      first: "Dmitry",
      currency: Currency.RUB
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: DATA_VALUE
      }
    };
    expect(getProfileDate(state as StateSchema)).toEqual(DATA_VALUE);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileDate(state as StateSchema)).toEqual(undefined);
  });
});
