"use client";

import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="h-screen bg-background ">
      <Navbar />
      <Hero />
      <Articles />
      <Footer />
    </main>
  );
}
