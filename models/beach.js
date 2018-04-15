'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {tableName: 'beaches', timestamps: false });
  Beach.associate = function(models) {
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beach_id',
    });
    Beach.hasMany(models.Castle, {
      foreignKey: 'beach_id',
    });
  };
  return Beach;
};