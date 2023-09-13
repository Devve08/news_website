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
  isLoadingMore: boolean
}

const initialState: State = {
  articles: [],
  isLoading: false,
  errorMessage: "",
  isLoadingMore: false
};

export const getTopArticles = createAsyncThunk(
  "get-top-articles",
  async (data: any) => {
    const response = await getTopArticlesAction(data);
    return response;
  }
);

export const getMoreTopArticles = createAsyncThunk(
  "get-more-top-articles",
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

export const getMoreSearchedArticles = createAsyncThunk(
  "get-more-searched-articles",
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
      (state.isLoadingMore = false), (state.errorMessage = payload.message);
    });
    builder.addCase(getMoreTopArticles.pending, state => {
      state.isLoadingMore = true;
    });
    builder.addCase(getMoreTopArticles.fulfilled, (state, { payload }: any) => {
      (state.articles = [...state.articles, ...payload.articles]),
        (state.isLoadingMore = false),
        (state.errorMessage = "");
    });
    builder.addCase(getMoreTopArticles.rejected, (state, { payload }: any) => {
      (state.isLoading = false), (state.errorMessage = payload.message);
    });
    builder.addCase(getMoreSearchedArticles.pending, state => {
      state.isLoadingMore = true;
    });
    builder.addCase(getMoreSearchedArticles.fulfilled, (state, { payload }: any) => {
      (state.articles = [...state.articles, ...payload.articles]),
        (state.isLoadingMore = false),
        (state.errorMessage = "");
    });
    builder.addCase(getMoreSearchedArticles.rejected, (state, { payload }: any) => {
      (state.isLoading = false), (state.errorMessage = payload.message);
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
      (state.isLoading = false), (state.errorMessage = payload.message);
    });
  },
});

export default articlesReducer.reducer;
