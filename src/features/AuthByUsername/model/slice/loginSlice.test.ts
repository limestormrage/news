import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("set userName", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername("321"))).toEqual({
      username: "321"
    });
  });
  test("set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword("321"))).toEqual({
      password: "321"
    });
  });
});
