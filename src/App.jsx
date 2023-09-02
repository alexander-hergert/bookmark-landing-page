import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <h1 className="text-center font-bold red">Bookmark landing page</h1>
        <Features />
        <Download />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
