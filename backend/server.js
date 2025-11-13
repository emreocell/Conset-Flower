const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  try {
    const { isim, email, mesaj } = req.body;
    if (!isim || !email || !mesaj) {
      return res.status(400).json({ success: false, errors: ["Tüm alanları doldurun."] });
    }

    const entry = `İsim: ${isim} | Email: ${email} | Mesaj: ${mesaj} | Tarih: ${new Date().toISOString()}\n`;
    const filePath = path.join(process.cwd(), "messages.txt");
    fs.appendFileSync(filePath, entry);

    return res.json({ success: true, message: "Mesajınız başarıyla gönderildi!" });
  } catch (err) {
    console.error("Hata:", err);
    return res.status(500).json({ success: false, errors: ["Sunucu hatası."] });
  }
});

app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor.`));
