"use client";
import { createSlice } from "@reduxjs/toolkit";

interface article {
  title: string;
  description: string;
}

interface State {
  articles: article[];
  isLoading: boolean;
}

const initialState: State = {
  articles: [],
  isLoading: false,
};

const articlesReducer = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export default articlesReducer.reducer;
