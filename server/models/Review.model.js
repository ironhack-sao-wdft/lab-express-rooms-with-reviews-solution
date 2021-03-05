const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = mongoose.Schema({
  comment: { type: String, maxlength: 200 },
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
});

const ReviewModel = mongoose.model("Review", ReviewSchema);

module.exports = ReviewModel;
