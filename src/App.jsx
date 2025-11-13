import React from "react";
import Hero from "./components/Hero/Hero";
import Urunler from "./components/Urunler/Urunler";
import Hakkimizda from "./components/Hakkimizda/Hakkimizda";
import Iletisim from "./components/Iletisim/Iletisim";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Urunler />
      <Hakkimizda />
      <Iletisim />
    </>
  );
};

export default App;
