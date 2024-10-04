import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

const DATA_VALUE = {
  username: "admin",
  age: 22,
  country: Country.Russia,
  lastname: "limestormrage",
  first: "Dmitry",
  currency: Currency.RUB
};

describe("fetchProfileData", () => {
  test("success fetchProfileData", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: DATA_VALUE }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(DATA_VALUE);
  });
  test("error login", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
