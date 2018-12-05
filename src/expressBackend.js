const express = require('express')
const app = express()
const models = require('./models');
const port = 8080
const bodyParser = require('body-parser');
const cors = require('cors');


const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('./middlewares/auth');
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
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
    ProfilePic: req.body.ProfilePic,
    GovernmentPic: req.body.GovernmentPic
  })
  .then((post) => {
    console.log(post);


    res.send("User Created");
     //res.redirect('/success');


  })
  .catch((err) => {
    console.log('ERROR while creating a new user');
    res.redirect('/error');
  })

})

app.post('/createListing', function (req, res) {
  models.ListingInfo.create({
   Title: req.body.Title,
   Subtitle: req.body.Subtitle,
   Category: req.body.Category,
   Condition: req.body.Condition,
   Price: req.body.Price,
   Description: req.body.Description,
   Zipcode: req.body.Zipcode,
   Picture: req.body.Picture,
   Tags: req.body.Tags
 })
 .then((post) => {
   console.log(post);
   //res.send("SUPPP");
    //res.redirect('/');
 })
 .catch((err) => {
   console.log('ERROR while creating a new listing');
   res.redirect('/error');
 })
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
app.use(controllers)


 //app.listen(port, () => console.log(`Example app listening on port ${port}!`))

models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is up and running on port: ${port}`)
    });
  })
