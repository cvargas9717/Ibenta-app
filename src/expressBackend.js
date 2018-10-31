const express = require('express')
const app = express()
const models = require('./models');
const port = 8080
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/createUser', function (req, res) {

  models.UserInfo.create({
    UserName: req.body.UserName,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    ZIP: req.body.ZIP,
    EmailAddress: req.body.EmailAddress,
    ConfirmEmail: req.body.ConfirmEmail,
    UniquePassword: req.body.UniquePassword,
    ConfirmPassword: req.body.ConfirmPassword,
    ProfilePic: req.body.ProfilePic,
    GovernmentPic: req.body.GovernmentPic
  })
  .then((post) => {
    console.log(post);
    //res.send("SUPPP");
     //res.redirect('/');
  })
  .catch((err) => {
    console.log('ERROR while creating a new user');
    res.redirect('/error');
  })

})


app.get('/userInfo', function (req, res) {

  models.UserInfo.findAll()
      .then((info) => {
        res.send(JSON.stringify(info));
        //console.log(info);

      });

})

 //app.listen(port, () => console.log(`Example app listening on port ${port}!`))

models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is up and running on port: ${port}`)
    });
  })
