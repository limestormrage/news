import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from "./articleDetails";

describe("getArticleDetails", () => {
  test("should return data", () => {
    const DATA_VALUE = {
      id: "1",
      title: "title"
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: DATA_VALUE
      }
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(DATA_VALUE);
  });
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: "error"
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
  test("should work with empty state isLoading", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });
  test("should work with empty state error", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
