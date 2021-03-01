const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    reviews: [],
  });

  const RoomModel = mongoose.model("Room", roomSchema);

  module.exports = RoomModel;