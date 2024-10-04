import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Comment } from "entities/Comment";

const COMMENTS_DATA: Comment[] = [
  {
    id: "1",
    text: "First comment",
    user: {
      username: "User1",
      id: "1"
    }
  },
  {
    id: "2",
    text: "Second comment",
    user: {
      username: "User2",
      id: "2"
    }
  }
];

describe("fetchCommentsByArticleId", () => {
  test("success case", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    // Мокаем успешный ответ API
    thunk.api.get.mockResolvedValue({ data: COMMENTS_DATA });

    const result = await thunk.callThunk("123");

    // Проверяем, что запрос был отправлен с правильными параметрами
    expect(thunk.api.get).toHaveBeenCalledWith("/comments", {
      params: { articleId: "123", _expand: "user" }
    });

    // Проверяем, что thunk завершился успешно и вернул корректные данные
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(COMMENTS_DATA);
  });

  test("failure case - no articleId", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    const result = await thunk.callThunk(undefined); // передаем undefined

    // Проверяем, что thunk завершился с ошибкой и вернул сообщение об ошибке
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });

  test("failure case - API error", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    // Мокаем ошибку API
    thunk.api.get.mockRejectedValue(new Error("Network Error"));

    const result = await thunk.callThunk("123");

    // Проверяем, что thunk завершился с ошибкой и вернул сообщение об ошибке
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Error");
  });
});
