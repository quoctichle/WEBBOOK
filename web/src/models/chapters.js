const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  Chapter_Id: {
    type: Number,
    required: true,
    unique: true
  },
  Book_Id: {
    type: Number,
    required: true
  },
  Chapter_Name: {
    type: String,
    required: true,
    maxlength: 250
  },
  Content: {
    type: String
  },
  UpdateTime: {
    type: Date,
    default: Date.now
  },
  ReadHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReadHistory'
  }]
});

module.exports = mongoose.model('Chapter', chapterSchema);
