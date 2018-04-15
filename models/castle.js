'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    castle_type: DataTypes.STRING
  }, { tableName: "castles", timestamps: false });
  Castle.associate = function(models) {
    Castle.belongsTo(models.Beach, {
      foreignKey: 'beach_id',
      onDelete: 'CASCADE'
    });
    Castle.belongsTo(models.Tool, {
      foreignKey: 'tool_id',
      onDelete: 'CASCADE'
    });
  };
  return Castle;
};