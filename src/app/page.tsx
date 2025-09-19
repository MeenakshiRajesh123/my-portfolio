"use client";

import Hero from "./components/Hero";
import SlideOutNav from "./components/SlideOutNav";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black relative">
      {/* Slide-out nav on the right */}
      <SlideOutNav />

      {/* Hero Section */}
      <Hero />
    </main>
  );
}
