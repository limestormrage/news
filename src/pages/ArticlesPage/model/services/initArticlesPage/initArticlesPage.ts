import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageIsInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticles } from "../fetchArticles";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const isInited = getArticlesPageIsInited(getState());

    if (!isInited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticles({ page: 1 }));
    }
  }
);
