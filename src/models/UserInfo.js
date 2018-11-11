//const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var UserInfo = sequelize.define('UserInfo', {
    UserName: DataTypes.TEXT,
    FirstName: DataTypes.TEXT,
    LastName: DataTypes.TEXT,
    ZIP: DataTypes.TEXT,
    EmailAddress: DataTypes.TEXT,
    ConfirmEmail: DataTypes.TEXT,
    UniquePassword: DataTypes.TEXT,
    ConfirmPassword: DataTypes.TEXT,
    ProfilePic: DataTypes.BLOB,
    GovernmentPic: DataTypes.BLOB

  });

  UserInfo.associate = (models) => {
    // associations can be defined here
  }

  // UserInfo.beforeCreate((user) =>
  //     new sequelize.Promise((resolve) => {
  //       bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
  //         resolve(hashedPassword);
  //       });
  //     }).then((hashedPw) => {
  //       user.password_hash = hashedPw;
  //     })
  //   );




  return UserInfo;
};
