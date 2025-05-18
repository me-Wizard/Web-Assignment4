const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree:      { type: String, required: true },
  field:       { type: String, required: true },
  startDate:   { type: Date,   required: true },
  endDate:     { type: Date }
});

module.exports = mongoose.model('Education', EducationSchema);
