import mysql from "mysql"

export const db = mysql.createConnection({
  host:"127.0.0.1",
  port: 3306,
  user:"root",
  password:"-Root123456-",
  database:"social"
})
