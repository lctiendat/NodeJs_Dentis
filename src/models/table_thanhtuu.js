'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_thanhtuu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  table_thanhtuu.init({
    id_list,
    id_item,
    id_cat,
    noibat,
    photo,
    thumb,
    ten,
    title,
    keywords,
    description,
    tenkhongdau,
    gia,
    dientich,
    mota,
    noidung,
    stt,
    hienthi,
    ngaytao,
    ngaysua,
    luotxem,
    mabn,
    diachi,
    dienthoai,
    ngaysinh,
    gioitinh
  }, {
    sequelize,
    modelName: 'table_thanhtuu',
  });
  return table_thanhtuu;
};