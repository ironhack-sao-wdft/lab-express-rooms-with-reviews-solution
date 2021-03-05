const express = require("express");
const router = express.Router();
const Room = require("../models/Room.model");
const Review = require("../models/Review.model");

// Crud - Create

router.post("/room/:id/review", async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    const room = await Room.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { reviews: newReview._id } },
      { new: true }
    );
    console.log(room);
    return res.status(201).json(newReview);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

// cRud - Read

router.get("/room/:id/review", async (req, res) => {
  try {
    const review = await Room.findOne({ _id: req.params.id }).populate(
      "reviews"
    );
    console.log(review);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }
    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

//   crUd - Update

router.patch("/review/:id", async (req, res) => {
  try {
    const updatedRoom = await Review.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ msg: "Review not found" });
    }
    return res.status(200).json(updatedReview);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

// cruD - Delete

router.delete("/review/:id", async (req, res) => {
  try {
    const deleteReview = await Review.deleteOne({ _id: req.params.id });
    if (!deleteReview) {
      return res.status(404).json({ msg: "Review not found" });
    }
    return res.status(200).json({});
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
