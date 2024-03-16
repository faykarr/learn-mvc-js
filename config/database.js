const mysqlDriver = require("mysql");

const dbConfig = mysqlDriver.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "todo-list",
  port: 3306,
});

dbConfig.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  }
    console.log(connection.state, "to MySQL"); 
});

// Export the database configuration
module.exports = dbConfig;