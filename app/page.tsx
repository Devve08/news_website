"use client";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className='h-screen bg-background '>
      <Navbar />
      <Footer />
    </main>
  );
}
