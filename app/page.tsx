"use client";

import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  console.log('render hom')
  return (
    <main className="h-screen bg-background px-4 sm:px-10 md:px-20">
      <Navbar />
      <Hero />
      <Articles />
      <Footer />
    </main>
  );
}
