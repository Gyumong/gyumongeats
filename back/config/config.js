require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "min",
    "password": null,
    "database": "gyumongeats_customer",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "min",
    "password": null,
    "database": "gyumongeats_customer",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}