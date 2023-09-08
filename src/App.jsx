import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Features from "./components/Features/Features";
import Download from "./components/Download/Download";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
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
