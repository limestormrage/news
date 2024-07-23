import { StateSchema } from "app/providers/StoreProvider";

export const getProfileDate = (state: StateSchema) => state.profile?.data;
