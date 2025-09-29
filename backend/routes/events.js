const express = require("express");
const router = express.Router();
const supabase = require("../db"); 

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("event").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: "Database fetch error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("event")
      .select("*")
      .eq("event_id", req.params.id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Error fetching event:", err);
    res.status(500).json({ error: "Database fetch error" });
  }
});
module.exports = router;