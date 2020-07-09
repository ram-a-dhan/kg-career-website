'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class impact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  impact.init({
    logo_path: DataTypes.STRING,
    main_image_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'impact',
  });
  return impact;
};