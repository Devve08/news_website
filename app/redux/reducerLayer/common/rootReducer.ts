"use client";

import { combineReducers } from "redux";
import articlesReducer from "../articlesReducer";

const appReducer = combineReducers({
  articles: articlesReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
