const express = require("express");
const pg = require("pg");
const cors = require("cors");
const pool = require("./db");
const app = express();
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
app.listen(5000,()=>console.log("server is running on localhost 5000.."));