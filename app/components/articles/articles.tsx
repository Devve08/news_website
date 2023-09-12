import React, { memo, useEffect, useState } from "react";
import ArticleCard from "./articleCard";
import { useAppDispatch, useAppSelector } from "@/app/kits/hooks";
import Loader from "../loader/loader";
import {
  getMoreSearchedArticles,
  getMoreTopArticles,
  getTopArticles,
} from "@/app/redux/reducerLayer/articlesReducer";
import Image from "next/image";
import { images } from "@/app/kits/images";

type ArticlesProps = {
  query: string;
  setPage: any;
  page: number;
};

const Articles = ({ query, setPage, page }: ArticlesProps) => {
  const { articles, isLoading, isLoadingMore } = useAppSelector(
    state => state.articles
  );

  const dispatch = useAppDispatch();
  console.log("articles rendering");
  const fetchTopArticles = () => {
    const data = {
      page: 1,
      limit: 10,
    };
    dispatch(getTopArticles(data))
      .then(res => setPage(0))
      .catch(err => console.log(err));
  };

  const fetchMoreTopArticles = () => {
    const data = {
      query,
      page,
      limit: 10,
    };
    if (query) {
      dispatch(getMoreSearchedArticles(data))
        .then(res => setPage(2))
        .catch(err => console.log(err));
    } else {
      dispatch(getMoreTopArticles(data))
        .then(res => setPage(2))
        .catch(err => console.log(err));
    }
  };

  // useEffect(() => {
  //   fetchTopArticles();
  // }, []);
  return (
    <div className="w-full  bg-background ">
      {isLoading && <Loader />}
      <div className="grid justify-between gap-x-12 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-auto mb-10">
        {!isLoading &&
          articles.length > 0 &&
          articles.map((article, index) => (
            <ArticleCard
              key={index}
              author={article?.author}
              url={article?.urlToImage}
              description={article?.description}
              title={article?.title}
              content={article?.content}
              date={article?.publishedAt}
            />
          ))}
      </div>
      {!isLoading && !isLoadingMore && articles.length > 0 && (
        <div className="w-full flex items-center justify-center">
          <div
            onClick={fetchMoreTopArticles}
            className="border border-text_secondary flex flex-row px-2 cursor-pointer rounded-sm py-2 justify-center items-center gap-2"
          >
            <div className="text-text_secondary text-sm font-medium">
              More articles
            </div>
            <Image
              className="h-3 w-3"
              height={0}
              width={0}
              src={images.arrow}
              alt={""}
            />
          </div>
        </div>
      )}
      {isLoadingMore && <Loader />}
    </div>
  );
};

export default memo(Articles);
