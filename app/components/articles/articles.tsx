import React from "react";
import ArticleCard from "./articleCard";
import { useAppSelector } from "@/app/kits/hooks";

const Articles = () => {
  const articles = useAppSelector(state => state.articles.articles);
 
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="grid justify-between gap-x-12 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-auto">
        {articles.length > 0 &&
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
    </div>
  );
};

export default Articles;
