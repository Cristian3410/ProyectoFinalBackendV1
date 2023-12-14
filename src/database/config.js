import mysql from "promise-mysql"
import dotenv from "dotenv"
dotenv.config()

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,
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