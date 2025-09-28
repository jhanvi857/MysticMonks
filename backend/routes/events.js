const express = require("express");
const pool = require("../db");
const router = express.Router();
router.get("/",async(req,res)=>{
    try {
    const result = await pool.query(`
  SELECT e.event_id, e.name, e.description, e.timing_description, 
         e.start_date, e.end_date, m.name AS monastery
  FROM event e
  LEFT JOIN eventmonastery em ON e.event_id = em.event_id
  LEFT JOIN monastery m ON em.monastery_id = m.monastery_id
  ORDER BY e.start_date ASC NULLS LAST, e.event_id ASC;
`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database fetch error" });
  }
});
module.exports = router;