'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class navbar_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  navbar_link.init({
    title: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'navbar_link',
  });
  return navbar_link;
};