import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticles } from "./fetchNextArticles";
import { fetchArticles } from "../fetchArticles";

//мокаем подуль
jest.mock("../fetchArticles");

describe("fetchNextArticles", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        hasMore: true
      }
    });

    //вызываем
    await thunk.callThunk();

    //ожидаем что диспатч вызовется 4 раза (пендинг, фулфилд и 2 диспатча внутри самого экшена)
    expect(thunk.dispatch).toBeCalledTimes(4);

    //ожидаем что вызвалось в правильными аргументами
    expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
  });
  test("fetchArticles not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesPage: {
        page: 2,
        entities: {},
        ids: [],
        limit: 5,
        hasMore: false
      }
    });

    //вызываем
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);

    //ожидаем что вызов не произойдет
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
