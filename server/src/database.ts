import mysql from "mysql2/promise";
import db from "./keys";

const connect = () => {
  const pool = mysql.createPool(db.database);
  pool.getConnection();
  return pool;
}

export const Mysql = connect();


//import mysql from 'mysql';

//import keys from './keys';

//const pool = mysql.createPool(keys.database);

//pool.getConnection(function(){
 // console.log('aleluya dB is connected ');
 // });

//export default pool;