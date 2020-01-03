/* DB ~ Project Schema */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  buttons: Array,
  details: Array,
  glyphs: Array,
  image: String,
  name: String,
  role: String,
  tech: Array
});

var Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
