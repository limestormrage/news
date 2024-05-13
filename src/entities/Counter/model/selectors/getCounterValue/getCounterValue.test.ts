import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const COUNTER_VALUE = 10;

    const state: DeepPartial<StateSchema> = {
      counter: {
        value: COUNTER_VALUE,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(COUNTER_VALUE);
  });
});
