module.exports = (sequelize, DataTypes) => {
  const ListingInfo = sequelize.define('ListingInfo', {
    Title: DataTypes.STRING,
    Subtitle: DataTypes.STRING,
    Category: DataTypes.STRING,
    Condition: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Description: DataTypes.TEXT,
    Zipcode: DataTypes.STRING,
    PictureURL: DataTypes.TEXT,
    Tags: DataTypes.ARRAY(DataTypes.STRING),
    SellerId: DataTypes.UUID
   });
   ListingInfo.associate = (models) => {
    // associations can be defined here
    //models.ListingInfo.belongsto(models.UserInfo);
  }
   return ListingInfo;
};