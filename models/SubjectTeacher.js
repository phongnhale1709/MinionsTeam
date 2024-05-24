const mongoose = require("mongoose");

const SubjectTeacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  class_name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SubjectTeacher", SubjectTeacherSchema);
