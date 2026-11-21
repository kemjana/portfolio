import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioTabs from "@/components/PortfolioTabs";
import Contact from "@/components/Contact";
import { SITE } from "@/data/portfolio";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PortfolioTabs />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {SITE.name}. Built with Next.js, React &amp; Tailwind CSS.
      </footer>
    </>
  );
}
