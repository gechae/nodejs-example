'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define({
    nickname : {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },{
    tableName: 'users',
    timestamps: true
  });
  User.associate = function(models){
      //associations can be defined here
  };
  User.prototype.toJson = function() {
    const values = Object.assign({},this.get())

    return {
      id: values.id,
      nickname: values.nickname
    }
  }
  return User;
};