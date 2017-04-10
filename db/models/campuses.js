const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('campuses', {
    name: Sequelize.STRING,
    image: Sequelize.STRING
})