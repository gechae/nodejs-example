'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    nickname : {
      allowNull: false,
      type : DataTypes.STRING
    },
    password: {
      allowNull: false,
      type : DataTypes.STRING
    }
  }, {
    tableName: 'users',
    timestamps: true
  });
  users.associate = function(models) {

  };
  users.prototype.toJson = function() {
    const values = Object.assign({},this.get())

    return {
      id : values.id,
      nickname : values.nickname
    }
  }
  return users;
};