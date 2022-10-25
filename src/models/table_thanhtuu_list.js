'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_thanhtuu_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  table_thanhtuu_list.init({
    ten: DataTypes.STRING,
    tenkhongdau: DataTypes.STRING,
    title: DataTypes.STRING,
    keywords: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    thumb: DataTypes.STRING,
    stt: DataTypes.INTEGER,
    hienthi: DataTypes.INTEGER,
    ngaytao: DataTypes.INTEGER,
    ngaysua: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'table_thanhtuu_list',
    tableName: 'table_thanhtuu_list',
    timestamps: false
  });
  return table_thanhtuu_list;
};