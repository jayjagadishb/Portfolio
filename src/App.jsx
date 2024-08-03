import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-hidden text-neutral-300 antiliased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Technology />
            <Experience />
            <Projects />
            <Education />
            <Gallery />
            <Contact />
          </div>
          <Analytics />
        </div>
      )}
    </>
  );
}

export default App;
