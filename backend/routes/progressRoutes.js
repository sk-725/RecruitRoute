const express = require("express");
const router = express.Router();
const {
  addEntry,
  getEntries,
  deleteEntry
} = require("../controllers/progressController");

router.post("/add", addEntry);
router.get("/entries", getEntries);
router.delete("/delete/:id", deleteEntry);

module.exports = router;