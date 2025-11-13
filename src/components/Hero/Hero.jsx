import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Conset Flowers</h1>
        <p className="hero-subtitle">Sadece çiçek göndermeyin, duygularınızı da iletin.</p>
        <a href="#urunler" className="hero-btn">Ürünlerimize Bak</a>
      </div>
    </section>
  );
};

export default Hero;


