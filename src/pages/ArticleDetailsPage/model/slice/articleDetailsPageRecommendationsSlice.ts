import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsRecommendationsSchema } from "../types/articleDetailsRecommendationsSchema";

const recommendationsAdapter = createEntityAdapter<Article>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (article: Article) => article.id
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: "articleDetailsPageRecommendationsSlice",
  initialState: recommendationsAdapter.getInitialState<articleDetailsRecommendationsSchema>({
    isLoading: false,
    error: "",
    entities: {},
    ids: []
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articleRecommendationsActions } = articleDetailsPageRecommendationsSlice;
export const { reducer: articleRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
