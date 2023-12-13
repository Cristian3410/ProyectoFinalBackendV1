import mysql from "promise-mysql"
import dotenv from "dotenv"
dotenv.config()

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
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