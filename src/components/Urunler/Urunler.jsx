import React from "react";
import "./Urunler.css";
import guller from "../../assets/gul.jpg";
import mix from "../../assets/karisik.jpg";
import beyaz_gul from "../../assets/beyaz_gul.png";

const Urunler = () => {
  return (
    <section id="urunler" className="urunler-section">
      <h2 className="urunler-title">Ürünlerimiz</h2>
      <div className="urunler-container">
        <div className="urun-kart">
          <img
            src={guller}
            alt="Kırmızı Gül Buketi - Evlilik teklifi, sevgililer günü ve özel anlar için mükemmel bir seçim."
            className="urun-resim"
          />
          <h3>Kırmızı Gül Buketi</h3>
          <p>Romantizmin sembolü. Evlilik teklifi, yıl dönümü ve sevgililer günü için idealdir.</p>
          <span className="urun-fiyat">199,99₺</span>
        </div>
        <div className="urun-kart">
          <img
            src={mix}
            alt="Karışık Çiçek Buketi - Renkli ve enerjik görünümüyle doğum günü ve kutlamalar için ideal."
            className="urun-resim"
          />
          <h3>Karışık Çiçek Buketi</h3>
          <p>Renkli ve enerjik görünümüyle doğum günü, kutlama veya teşekkür için harika bir tercih.</p>
          <span className="urun-fiyat">249,99₺</span>
        </div>
        <div className="urun-kart">
          <img
            src={beyaz_gul}
            alt="Beyaz Gül - Saflık ve zarafeti temsil eden özel tasarım."
            className="urun-resim"
          />
          <h3>Beyaz Gül Buketi</h3>
          <p>Sadelik ve zarafeti temsil eder. Nikah, davet ve ofis ortamları için uygundur.</p>
          <span className="urun-fiyat">299,99₺</span>
        </div>
      </div>
    </section>
  );
};

export default Urunler;
