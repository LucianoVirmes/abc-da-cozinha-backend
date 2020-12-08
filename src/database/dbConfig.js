require("dotenv").config();

module.exports = {
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
}