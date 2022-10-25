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
    id_list: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_item: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_cat: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    noibat: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    photo: DataTypes.STRING,
    thumb: DataTypes.STRING,
    ten: DataTypes.STRING,
    title: DataTypes.STRING,
    keywords: DataTypes.STRING,
    description: DataTypes.STRING,
    tenkhongdau: DataTypes.STRING,
    gia: DataTypes.INTEGER,
    dientich: DataTypes.STRING,
    mota: DataTypes.TEXT,
    noidung: DataTypes.TEXT,
    stt: DataTypes.INTEGER,
    hienthi: DataTypes.TINYINT,
    ngaytao: DataTypes.INTEGER,
    ngaysua: DataTypes.INTEGER,
    luotxem: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    mabn: DataTypes.TEXT,
    diachi: DataTypes.TEXT,
    dienthoai: DataTypes.TEXT,
    ngaysinh: DataTypes.DATE,
    gioitinh: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'table_thanhtuu',
    tableName: 'table_thanhtuu',
    timestamps: false
  });
  return table_thanhtuu;
};