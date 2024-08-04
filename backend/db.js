import mysql from 'mysql2/promise';

let connection;

export async function createMySQLConnection() {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: process.env.MYSQL_DB_HOST,
        user: process.env.MYSQL_DB_USERNAME,
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME ,
      });
      console.log('Connected to the MySQL server.');
    } catch (error) {
      console.error('Error connecting to the MySQL server:', error);
      throw error;
    }
  }
  return connection;
}
