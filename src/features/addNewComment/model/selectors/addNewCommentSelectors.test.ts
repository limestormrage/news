import { StateSchema } from "app/providers/StoreProvider";
import { getAddNewCommentError, getAddNewCommentText } from "./addNewCommentSelectors";

describe("addNewCommentSelectors", () => {
  test("should return value text", () => {
    const COMMENT_VALUE = "текст комментария";

    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        text: COMMENT_VALUE
      }
    };
    expect(getAddNewCommentText(state as StateSchema)).toEqual(COMMENT_VALUE);
  });
  test("should return value error", () => {
    const ERROR = "ошибка запроса";

    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        error: ERROR
      }
    };
    expect(getAddNewCommentError(state as StateSchema)).toEqual(ERROR);
  });
});
