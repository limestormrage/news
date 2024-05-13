import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
  test("counter decrement", () => {
    const COUNTER_VALUE = 10;

    const state: CounterSchema = {
      value: COUNTER_VALUE,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: COUNTER_VALUE - 1 });
  });
  test("counter increment", () => {
    const COUNTER_VALUE = 10;

    const state: CounterSchema = {
      value: COUNTER_VALUE,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: COUNTER_VALUE + 1 });
  });
  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
