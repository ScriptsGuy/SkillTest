const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const colors = require('colors');

const app = express();

mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5c1bcfe9795f29086500e0bd')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404'
  });
});

mongoose
  .connect(
    'mongodb://localhost/OuedKniss',
    { useNewUrlParser: true }
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          userName: 'Max',
          email: 'max@test.com',
          wishlist: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000, () => {
      console.log('Connected'.bgGreen.black);
    });
  })
  .catch((err) => {
    console.log(err);
  });
