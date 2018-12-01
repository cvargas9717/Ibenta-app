module.exports = (sequelize, DataTypes) => {
  var ListingInfo = sequelize.define('ListingInfo', {
    Title: DataTypes.STRING,
    Subtitle: DataTypes.STRING,
    Category: DataTypes.STRING,
    Condition: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Description: DataTypes.TEXT,
    Zipcode: DataTypes.STRING,
    PictureURL: DataTypes.TEXT,
    Tags: DataTypes.ARRAY(DataTypes.STRING)
   });
   ListingInfo.associate = (models) => {
    // associations can be defined here
  }
   return ListingInfo;
};