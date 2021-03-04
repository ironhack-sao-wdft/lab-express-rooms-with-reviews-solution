const express = require("express");
const router = express.Router();

const Room = require("../models/Room.model");

// Crud (Create)
router.post("/room", async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    console.log(newRoom);

    return res.status(201).json(newRoom);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

// cRud (Read) all
router.get("/room", async (req, res) => {
  try {
    const rooms = await Room.find();

    return res.status(200).json(rooms);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

// cRud (Read) one
router.get("/room/:id", async (req, res) => {
  try {
    const room = await Room.findOne({ _id: req.params.id });
    console.log(room);

    if (!room) {
      return res.status(404).json({ msg: "Room not found" });
    }
    return res.status(200).json(room);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

// crUd (Update)
router.patch("/room/:id", async (req, res) => {
  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ msg: "Room not found." });
    }

    return res.status(200).json(updatedRoom);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

// cruD (Delete)
router.delete("/room/:id", async (req, res) => {
  try {
    const deleted = await Room.deleteOne({ _id: req.params.id });

    if (!deleted) {
      return res.status(404).json({ msg: "Room not found." });
    }

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
