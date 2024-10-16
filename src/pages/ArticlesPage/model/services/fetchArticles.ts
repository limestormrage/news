import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../selectors/articlesPageSelectors";

interface fetchArticlesProps {
  page: number;
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkConfig<string>>(
  "articlesPage/fetchArticles",
  async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page } = args;
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue("Error");
    }
  }
);
