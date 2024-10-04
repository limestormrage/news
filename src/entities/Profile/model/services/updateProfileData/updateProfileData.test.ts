import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileError } from "../../types/profile";
import { updateProfileData } from "./updateProfileData";

const DATA_VALUE = {
  username: "admin",
  age: 22,
  country: Country.Russia,
  lastname: "limestormrage",
  first: "Dmitry",
  currency: Currency.RUB,
  id: "1"
};

describe("updateProfileData", () => {
  test("success updateProfileData", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: DATA_VALUE
      }
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: DATA_VALUE }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(DATA_VALUE);
  });
  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: DATA_VALUE
      }
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...DATA_VALUE, first: "" }
      }
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
