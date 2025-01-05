/* eslint-disable indent */
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { addNewCommentReducer } from "features/addNewComment/model/slice/addNewCommentSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailReducer,
  addNewComment: addNewCommentReducer,
  articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
