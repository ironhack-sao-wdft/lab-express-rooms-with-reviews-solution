const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

const RoomModel = mongoose.model("Room", roomSchema);

module.exports = RoomModel;