const express = require("express");
const router = express.Router();

const Room = require("../models/Room.model");

router.post("/room", async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    console.log(newRoom);

    return res.status(201).json(newRoom);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.get("/room", async (req, res) => {
  try {
    const rooms = await Room.find();

    return res.status(200).json(rooms);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
