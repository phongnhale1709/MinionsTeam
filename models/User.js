// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["class_master", "subject_teacher", "subject_head_teacher"],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username: username });
};
module.exports = mongoose.model("User", UserSchema);
