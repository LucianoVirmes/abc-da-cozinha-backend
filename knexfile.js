const dbConfig = require("./src/database/dbConfig");

const migrations = { directory: './src/database/migrations' }
const seeds = { directory: './src/database/seeds' }

module.exports = {

  development: {
    client: 'postgres',
    connection: dbConfig,
    migrations,
    seeds
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations,
    seeds
  }

};
