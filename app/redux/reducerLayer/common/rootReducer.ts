"use client";

import { combineReducers } from "redux";
import articlesReducer from "../articlesReducer";
import menuReducer from "../menuReducer";

const appReducer = combineReducers({
  articles: articlesReducer,
  menu: menuReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
