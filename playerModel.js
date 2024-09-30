const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  playerId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  pointsScored: {
    type: Number,
    required: true,
  },
  yearsActive: {
    type: Number,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Player", playerSchema, "basketballPlayers");
