const express = require("express");
const router = express.Router();
const { getJson } = require("serpapi");

router.post("/", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Query required" });

  try {
    getJson({
      engine: "google_ai_mode",
      q: query,
      api_key: process.env.SERPAPI_KEY,
    }, (json) => {
      if (!json || !json.text_blocks) {
        return res.status(500).json({ error: "No AI results found" });
      }

      const results = [];

      // Add text blocks
      json.text_blocks.forEach(block => {
        results.push({ type: block.type, snippet: block.snippet || block.text });
      });

      // Add images
      if (json.inline_images) {
        json.inline_images.forEach(url => results.push({ type: "image", url }));
      }

      // Add references
      if (json.references) {
        json.references.forEach(ref => results.push({ type: "reference", title: ref.title, link: ref.link }));
      }

      res.json({ results }); // <-- send array
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;
