const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [],
});

const RoomModel = mongoose.model("Room", RoomSchema);

module.exports = RoomModel;
