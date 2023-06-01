const { Sequelize } = require('sequelize')

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: console.log,
})

module.exports = connection