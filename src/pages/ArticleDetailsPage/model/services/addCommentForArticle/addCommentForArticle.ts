import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { articleDetailsCommentsActions } from "../../slice/articleDetailsCommentsSlice";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  "articleDetails/addCommentForArticle",
  async (comment, thunkApi) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !comment || !article) {
      return rejectWithValue("no data");
    }

    try {
      const response = await extra.api.post<Comment>("/comments", {
        text: comment,
        articleId: article.id,
        userId: userData.id
      });

      if (!response.data) {
        throw new Error();
      }

      const newComment: Comment = {
        id: response.data.id,
        text: response.data.text,
        user: userData
      };

      dispatch(articleDetailsCommentsActions.addComment(newComment));

      return response.data;
    } catch (e) {
      return rejectWithValue("Error");
    }
  }
);
