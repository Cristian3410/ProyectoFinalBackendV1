import mysql from "promise-mysql"
import {
DB_HOST,
DB_NAME,
DB_PASSWORD,
DB_USER,
DB_PORT

} from "../configV2.js"

const connection = mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME,
    port:DB_PORT
});


const getconnection = async () => {
    try{
    await connection;
    console.log("conectado a la base de datos");
    return connection;
    
    }catch(error){
        console.log(error);
    }
}


export default getconnection;