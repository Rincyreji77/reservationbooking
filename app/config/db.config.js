module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysql#@16",
    DB: "reservation",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };