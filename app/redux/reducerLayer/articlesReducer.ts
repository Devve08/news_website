"use client";
import { getSearchedArticlesAction, getTopArticlesAction } from "@/app/actionHandlerLayer/articles";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface article {
  urlToImage: string;
  author: string;
  content: string;
  publishedAt: string;
  title: string;
  description: string;
}

interface State {
  articles: article[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  articles: [],
  isLoading: false,
  errorMessage: "",
};

export const getTopArticles = createAsyncThunk(
  "get-top-articles",
  async (data: any) => {
    const response = await getTopArticlesAction(data);
    return response;
  }
);

export const getSearchedArticles = createAsyncThunk(
  "get-searched-articles",
  async (data: any) => {
    const response = await getSearchedArticlesAction(data);
    return response;
  }
);

const articlesReducer = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTopArticles.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTopArticles.fulfilled, (state, { payload }: any) => {
      (state.articles = payload.articles),
        (state.isLoading = false),
        (state.errorMessage = "");
    });
    builder.addCase(getTopArticles.rejected, (state, { payload }: any) => {
      (state.isLoading = false), (state.errorMessage = payload);
    });
    builder.addCase(getSearchedArticles.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSearchedArticles.fulfilled, (state, { payload }: any) => {
      (state.articles = payload.articles),
        (state.isLoading = false),
        (state.errorMessage = "");
    });
    builder.addCase(getSearchedArticles.rejected, (state, { payload }: any) => {
      (state.isLoading = false), (state.errorMessage = payload);
    });
  },
});

export default articlesReducer.reducer;
