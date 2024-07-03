import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUserName } from "./getLoginUserName";

describe("getLoginUserName", () => {
  test("should return userName", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "name"
      }
    };
    expect(getLoginUserName(state as StateSchema)).toEqual("name");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUserName(state as StateSchema)).toEqual("");
  });
});
