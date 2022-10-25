'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_thanhtuu_cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  table_thanhtuu_cat.init({
    id_list: DataTypes.INTEGER,
    ten: DataTypes.STRING,
    tenkhongdau: DataTypes.STRING,
    photo: DataTypes.STRING,
    thumb: DataTypes.STRING,
    stt: DataTypes.INTEGER,
    hienthi: DataTypes.INTEGER,
    ngaytao: DataTypes.INTEGER,
    ngaysua: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'table_thanhtuu_cat',
    tableName: 'table_thanhtuu_cat',
    timestamps: false
  });
  return table_thanhtuu_cat;
};