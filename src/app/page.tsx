import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className={clsx('bg-black', 'text-white')}>
      <Navbar />
      <Hero />
      <Features />  
    </main>
  );
}