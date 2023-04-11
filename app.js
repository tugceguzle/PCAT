const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const photoController = require('./controller/photoControllers');
const pageController = require('./controller/pageController');
require('dotenv').config()


const app = express();

mongoose.connect(`mongodb+srv://tugce:${process.env.MONGO_PASSWORD}@cluster0.btezp8x.mongodb.net/?retryWrites=true&w=majority`);


app.set('view engine', 'ejs');

app.use(methodOverride('_method',{
  methods:['GET','POST']
}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());   

app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);


 

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
