"use client";

import ArticleCard from "./components/articleCard";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="h-screen bg-background ">
      <Navbar />
      <div className="w-full min-h-screen bg-background">
        <div className="grid justify-between gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
      <Footer />
    </main>
  );
}
