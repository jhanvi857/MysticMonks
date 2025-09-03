const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",   
  database: "sikkimdb",  
  password: "admin",
  port: 5435,
});


module.exports = pool;
