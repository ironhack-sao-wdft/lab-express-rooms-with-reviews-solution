const express = require("express");
const router = express.Router();

const Review = require("../models/Review.model");

router.post("/review", async (req, res) => {
  try {
    const newReview = await Review.create(req.body);

    console.log(newReview);
    return res.status(201).json(newReview);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

router.patch("/review/:id", async (req, res) => {
  try {
    const updatedReview = await Review.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ msg: "Review not found" });
    }

    return res.status(200).json(updatedReview);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.delete("/review/:id", async (req, res) => {
  try {
    const deletedReview = await Review.deleteOne({ _id: req.params.id });

    if (!deletedReview) {
      return res.status(404).json({ msg: "Review not found" });
    }

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
