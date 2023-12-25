import React from "react";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Footer from "../../Shared/Footer";
import Hero from "./Hero";
import CTA from "./CTA";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[128px] md:my-[200px] my-[160px]">
        <Hero />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </>
  );
}

export default Home;
