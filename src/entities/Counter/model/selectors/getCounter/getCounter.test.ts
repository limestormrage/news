import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "../getCounter/getCounter";

describe("getCounter", () => {
  test("should return counter value", () => {
    const COUNTER_VALUE = 10;

    const state: DeepPartial<StateSchema> = {
      counter: {
        value: COUNTER_VALUE,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: COUNTER_VALUE });
  });
});
