const mongoose = require("mongoose");
const Progress = require("../models/Progress");

// CREATE
exports.addEntry = async (req, res) => {
  try {
    const { date, problems, hours, topic } = req.body;

    if (!date || !problems || !hours || !topic) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEntry = new Progress({ date, problems, hours, topic });
    await newEntry.save();

    res.status(201).json({ message: "Entry saved successfully" });

  } catch (error) {
    console.error("POST Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// READ
exports.getEntries = async (req, res) => {
  try {
    const entries = await Progress.find().sort({ date: -1 });
    res.status(200).json(entries);
  } catch (error) {
    console.error("GET Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE
exports.deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedEntry = await Progress.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json({ message: "Entry deleted successfully" });

  } catch (error) {
    console.error("DELETE Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};