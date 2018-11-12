module.exports = (sequelize, DataTypes) => {
  var ListingInfo = sequelize.define('ListingInfo', {
    Title: DataTypes.TEXT,
    Subtitle: DataTypes.TEXT,
    Category: DataTypes.TEXT,
    Condition: DataTypes.TEXT,
    Price: DataTypes.FLOAT,
    Description: DataTypes.TEXT,
    Zipcode: DataTypes.TEXT,
    Picture: DataTypes.BLOB,
    Tags: DataTypes.ARRAY

  });

  UserInfo.associate = (models) => {
    // associations can be defined here
  }

  return UserInfo;
};
