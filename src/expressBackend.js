const express = require('express');
const app = express();
const models = require('./models');
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('./middlewares/auth');

//app.use(cors());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors({origin: true, credentials: true}))

app.use(expressSession(({
  secret: 'keyboard cat - REPLACE ME WITH A BETTER SECRET',
  resave: false,
  saveUninitialized: true,
})));
app.use(passport.initialize());
app.use(passport.session());

app.post('/createUser', function (req, res) {

  models.UserInfo.create({
    UserName: req.body.UserName,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Zip: req.body.Zip,
    EmailAddress: req.body.EmailAddress,
    ConfirmEmail: req.body.ConfirmEmail,
    UniquePassword: req.body.UniquePassword,
    ProfilePicURL: req.body.ProfilePicURL,
    GovernmentPicURL: req.body.GovernmentPicURL
  })
  .then((user) => {
    //console.log(user);
    //res.send("User Created");
    //res.redirect('/');
    req.login(user, () =>
      res.redirect(`/profile/${req.user.id}`)
    );
  })
  .catch((err) => {
    console.log('ERROR while creating a new user');
    res.redirect('/error');
  })

});

app.post('/createListing', function (req, res) {
  models.ListingInfo.create({
   Title: req.body.Title,
   Subtitle: req.body.Subtitle,
   Category: req.body.Category,
   Condition: req.body.Condition,
   Price: req.body.Price,
   Description: req.body.Description,
   Zipcode: req.body.Zipcode,
   PictureURL: req.body.PictureURL,
   Tags: req.body.Tags,
   SellerId: 3
 })
 .then((post) => {
   //console.log(post);
   res.redirect(`'/profile/3'`)
   //res.send("SUPPP");
    //res.redirect('/');
 })
 .catch((err) => {
   console.log(err)
   console.log('ERROR while creating a new listing');
   res.redirect('/error');
 })
});


app.get('/userInfo/:userId', function (req, res) {

  // models.UserInfo.findAll()
  //     .then((info) => {
  //       res.send(JSON.stringify(info));

  //     });

  models.UserInfo.findById(req.params.userId)
    .then((info) => {
      res.send(JSON.stringify(info));
      console.log(info);
    })

})

app.get('/listingInfo', function (req, res) {

  models.ListingInfo.findAll()
      .then((info) => {
        res.send(JSON.stringify(info));
        console.log(info)
      });

})

app.get('/sellerListing/:sellerId', function (req, res) {

  models.ListingInfo.findAndCountAll({
    where: {
      SellerId: req.params.sellerId,
    }
  }).then((info) => {
    res.send(JSON.stringify(info));
    console.log(info);
    console.log(info.row);
  });

})

app.get('/listingInfo/:listingId', function (req, res) {

  models.ListingInfo.findById(req.params.listingId)
    .then((info) => {
      res.send(JSON.stringify(info));
      console.log(info)
    })

})

// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers);


 //app.listen(port, () => console.log(`Example app listening on port ${port}!`))

models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is up and running on port: ${port}`)
    });
  });
