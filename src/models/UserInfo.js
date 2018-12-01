const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var UserInfo = sequelize.define('UserInfo', {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Zip: DataTypes.STRING,
    EmailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true, //sequalize validation
      },
    },
    ConfirmEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true, //sequalize validation
      },
    },
    UniquePassword: {
      type: DataTypes.STRING,
    },
    ProfilePicURL: DataTypes.TEXT,
    GovernmentPicURL: DataTypes.TEXT

  });

  UserInfo.associate = (models) => {
    // associations can be defined here
  }

  //this is sequelize  lifecycle hook
  UserInfo.beforeCreate((user) =>
      new sequelize.Promise((resolve) => {
        bcrypt.hash(user.UniquePassword, null, null, (err, hashedPassword) => {
          resolve(hashedPassword);
        });
      }).then((hashedPw) => {
        user.UniquePassword = hashedPw;
      })
    );


  return UserInfo;
};
