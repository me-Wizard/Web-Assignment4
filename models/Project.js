const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  link:        { type: String },
  techStack:   [String],
  date:        { type: Date }
});

module.exports = mongoose.model('Project', ProjectSchema);
