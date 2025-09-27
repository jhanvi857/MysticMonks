require("dotenv").config();
const express = require("express");
const pg = require("pg");
const cors = require("cors");
const pool = require("./db");
const app = express();
const events = require("./routes/events");
app.use(cors());
app.use(express.json());
app.get("/monasteries",async(req,res)=>{
    try{
        const result = await pool.query("SELECT * FROM Monastery");
        res.json(result.rows);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});
app.get("/monasteries/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Monastery WHERE monastery_id = $1", [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "DB error" });
  }
});
// libretranslate route..
// app.post("/translate", async (req, res) => {
//   const { text, targetLang } = req.body;

//   try {
//     const response = await fetch('https://libretranslate.de/translate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         q: text,
//         source: 'en',
//         target: targetLang,
//         format: 'text',
//       }),
//     });

//     const data = await response.json();
//     res.json({ translatedText: data.translatedText });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Translation failed' });
//   }
// });
app.use("/events",events);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));