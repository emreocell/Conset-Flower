import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled] = useState(false);
  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo"><a href="#hero">Conset Flowers</a></div>
      <ul className="navbar-links">
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#urunler">Ürünler</a></li>
        <li><a href="#hakkimizda">Hakkımızda</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
