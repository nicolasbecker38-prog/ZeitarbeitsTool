// backend/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: "Bitte alle Felder ausfüllen" });
  }

  try {
    // Beispiel SMTP-Konfiguration – bitte mit echten Zugangsdaten ersetzen
    let transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "dein.email@example.com",
        pass: "deinPasswort",
      },
    });

    await transporter.sendMail({
      from: '"OPPM OFFICE" <dein.email@example.com>',
      to,
      subject,
      text,
    });

    res.json({ message: "E-Mail erfolgreich versendet" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
});
