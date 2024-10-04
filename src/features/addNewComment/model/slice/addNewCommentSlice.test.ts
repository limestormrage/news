import { addNewCommentSchema } from "../types/addNewComment";
import { addNewCommentActions, addNewCommentReducer } from "./addNewCommentSlice";

describe("addNewCommentSlice", () => {
  test("setText", () => {
    const COMMENT_VALUE = "новый комментарий";

    const state: addNewCommentSchema = {
      text: "",
      error: null
    };
    expect(addNewCommentReducer(state, addNewCommentActions.setText(COMMENT_VALUE))).toEqual({
      text: COMMENT_VALUE,
      error: null
    });
  });
});
