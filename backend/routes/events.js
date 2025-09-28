// const express = require("express");
// const pool = require("../db");
// const router = express.Router();
// router.get("/",async(req,res)=>{
//     try {
//     const result = await pool.query(`
//   SELECT e.event_id, e.name, e.description, e.timing_description, 
//          e.start_date, e.end_date, m.name AS monastery
//   FROM event e
//   LEFT JOIN eventmonastery em ON e.event_id = em.event_id
//   LEFT JOIN monastery m ON em.monastery_id = m.monastery_id
//   ORDER BY e.start_date ASC NULLS LAST, e.event_id ASC;
// `);
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Database fetch error" });
//   }
// });
// module.exports = router;
const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all events with monastery details
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        e.event_id,
        e.name AS event_name,
        e.description,
        e.start_date,
        e.end_date,
        e.timing_description,
        e.booking_available,
        json_agg(
          json_build_object(
            'monastery_id', m.monastery_id,
            'name', m.name,
            'location_lat', m.location_lat,
            'location_long', m.location_long,
            'established_year', m.established_year,
            'architecture_style', m.architecture_style,
            'image_url', m.image_url,
            'vr_tour_url', m.vr_tour_url
          )
        ) AS monasteries
      FROM Event e
      LEFT JOIN EventMonastery em ON e.event_id = em.event_id
      LEFT JOIN Monastery m ON em.monastery_id = m.monastery_id
      GROUP BY e.event_id
      ORDER BY e.start_date NULLS LAST;
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: "Database fetch error" });
  }
});

// GET single event by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        e.event_id,
        e.name AS event_name,
        e.description,
        e.start_date,
        e.end_date,
        e.timing_description,
        e.booking_available,
        json_agg(
          json_build_object(
            'monastery_id', m.monastery_id,
            'name', m.name,
            'location_lat', m.location_lat,
            'location_long', m.location_long,
            'established_year', m.established_year,
            'architecture_style', m.architecture_style,
            'image_url', m.image_url,
            'vr_tour_url', m.vr_tour_url
          )
        ) AS monasteries
      FROM Event e
      LEFT JOIN EventMonastery em ON e.event_id = em.event_id
      LEFT JOIN Monastery m ON em.monastery_id = m.monastery_id
      WHERE e.event_id = $1
      GROUP BY e.event_id;
    `, [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching event by ID:", err);
    res.status(500).json({ error: "Database fetch error" });
  }
});
module.exports = router;