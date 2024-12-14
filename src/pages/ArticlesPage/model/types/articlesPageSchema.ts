import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { ArticleSortField, ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";

export interface articlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error: string | null;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;

  //filter
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType

  _inited: boolean;
}
