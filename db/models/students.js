'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('students', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
})