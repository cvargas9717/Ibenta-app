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
var router = express.Router();

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
    console.log(user);
    res.json(user);
    //res.send("User Created");
    //res.redirect('/');
    // req.login(user, () =>
    //   //res.redirect(`/profile/${req.user.id}`)
    //   //res.redirect('http://localhost:3000/profile/3')
    //   res.send('user created and logged in')
    // );
  })
  .catch((err) => {
    console.log('ERROR while creating a new user');
    console.log(err);
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
   PictureURL: req.user,
   Tags: req.body.Tags,
   SellerId: req.body.SellerId
 })
 .then((post) => {
   console.log(post);
   //res.redirect(`/profile/${req.user.id}`)
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
  });
})

app.post('/a', function (req, res) {
  console.log("This is the id >>> "+ req.body.id)
  models.UserInfo.findByPk(req.body.id).then((user) => {
    console.log(user+ " Just got this data" );
    console.log(user.FirstName);

    res.json({
      id: user.id,
      UserName : user.UserName,
      FirstName: user.FirstName,
      LastName: user.LastName,
      EmailAddress: user.EmailAddress
    });
  });
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
