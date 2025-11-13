import React, { useState } from "react";
import "./Iletisim.css";

const Iletisim = () => {
  const [isim, setIsim] = useState("");
  const [email, setEmail] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isim, email, mesaj }),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMsg(data.message);
        setIsim("");
        setEmail("");
        setMesaj("");
      } else {
        setResponseMsg(data.errors.join(" "));
      }
    } catch (err) {
      setResponseMsg("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <section id="iletisim" className="iletisim-section">
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit} className="iletisim-form">
        <input
          type="text"
          placeholder="İsminiz"
          value={isim}
          onChange={(e) => setIsim(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Mesajınız"
          value={mesaj}
          onChange={(e) => setMesaj(e.target.value)}
        />
        <button type="submit">Gönder</button>
      </form>
      {responseMsg && <p className="response-msg">{responseMsg}</p>}
    </section>
  );
};

export default Iletisim;
