const Sequelize = require('sequelize');

const db = require('../utils/database/database');

const cartItem = db.define('cartItem',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    quantity: Sequelize.INTEGER
  });
  
  module.exports = cartItem;