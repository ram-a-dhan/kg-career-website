'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  testimonial.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Title cannot be empty'
          }
        }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Message cannot be empty'
          }
        }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name cannot be empty'
          }
        }
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Position cannot be empty'
          }
        }
    },
    photo_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'testimonial',
  });
  return testimonial;
};