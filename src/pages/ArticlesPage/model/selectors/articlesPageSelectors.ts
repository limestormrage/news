import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT_ARTICLES = 4;

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || null;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.PLATE;

export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || DEFAULT_PAGE;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || DEFAULT_LIMIT_ARTICLES;

export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || false;
