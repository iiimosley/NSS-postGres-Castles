'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tool = sequelize.define('Tool', {
    tool_type: DataTypes.STRING
  }, { tableName: "tools", timestamps: false });
  Tool.associate = function(models) {
    Tool.hasMany(models.Castle, {
      foreignKey: 'tool_id',
    });
  };
  return Tool;
};