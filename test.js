const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db");
const PhotoSchema = new Schema({
    title: String,
    description: String,
  })
  const Photo = mongoose.model('Photo', PhotoSchema);
  Photo.create({
    title: 'Photo Title 1',
    description: 'Photo description 1 lorem ipsum',
  });
  const data = Photo.find({});
  console.log(data);