import { addCommentForArticle } from "./addCommentForArticle";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Comment } from "entities/Comment";
import { articleDetailsCommentsActions } from "../../slice/articleDetailsCommentsSlice";

const COMMENT_DATA: Comment = {
  id: "1",
  user: {
    username: "TestUser",
    id: "1"
  },
  text: "Test comment"
};

describe("addCommentForArticle", () => {
  test("success case", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: "1", username: "TestUser" } },
      articleDetails: { data: { id: "2" } }
    });

    // Mock the axios post method to return the mock comment data
    thunk.api.post.mockResolvedValue({ data: COMMENT_DATA });

    const result = await thunk.callThunk("New comment");

    expect(thunk.api.post).toHaveBeenCalledWith("/comments", {
      text: "New comment",
      articleId: "2",
      userId: "1"
    });

    const newComment = {
      id: COMMENT_DATA.id,
      text: COMMENT_DATA.text,
      user: { id: "1", username: "TestUser" }
    };

    expect(thunk.dispatch).toHaveBeenCalledWith(
      articleDetailsCommentsActions.addComment(newComment)
    );

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(COMMENT_DATA);
  });

  test("failure case - no data", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {});

    const result = await thunk.callThunk("New comment");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe(undefined);
  });
});
