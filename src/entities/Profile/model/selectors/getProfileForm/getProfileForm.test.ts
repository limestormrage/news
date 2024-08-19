import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  test("should return counter value", () => {
    const FORM_VALUE = {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "limestormrage",
      first: "Dmitry",
      currency: Currency.RUB
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: FORM_VALUE
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(FORM_VALUE);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
