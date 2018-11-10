module.exports = (sequelize, DataTypes) => {
  var UserInfo = sequelize.define('ItemInfo', {
    Title: DataTypes.TEXT,
    Subtitle: DataTypes.TEXT,
    Category: DataTypes.TEXT,
    Condition: DataTypes.TEXT,
    Price: DataTypes.NUMBER,
    Description: DataTypes.TEXT,
    Zipcode: DataTypes.TEXT,
    Picture: DataTypes.BLOB

  });

  ItemInfo.associate = (models) => {
    // associations can be defined here
  }

  return ItemInfo;
};
