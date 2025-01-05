import { StateSchema } from "app/providers/StoreProvider";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "./comments";

describe("commentsSelector", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: false
        }
      }
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false);
  });
  test("should return error", () => {
    const ERROR = "ошибка запроса";

    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: ERROR
        }
      }
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual(ERROR);
  });
});
