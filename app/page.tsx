"use client";

import { useCallback, useState } from "react";
import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import { useAppDispatch } from "./kits/hooks";
import { getSearchedArticles } from "./redux/reducerLayer/articlesReducer";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const handleOnChangeQuery = useCallback((query: string) => {
    setQuery(query);
  }, []);

  const handleSetPage = (num: number) => {
    setPage(prev => (num == 0 ? 2 : prev + 1));
  };
  const handleSearch = () => {
    const data = {
      query,
      page: 1,
      limit: 10,
    };
    dispatch(getSearchedArticles(data))
      .then(res => setPage(2))
      .catch(err => console.log(err));
  };

  return (
    <main className="mn-h-screen bg-background ">
      <Hero
        handleSearch={handleSearch}
        query={query}
        handleOnChangeQuery={handleOnChangeQuery}
      />
      <Articles page={page} setPage={handleSetPage} query={query} />
    </main>
  );
};

export default Home;
