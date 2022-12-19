const msSQL = require("mssql");
const dotenv = require("dotenv");

dotenv.config();

const dbconnection = new msSQL.ConnectionPool({
    database: process.env.MSSQL_DB,  
    server: process.env.SERVER,
    user: process.env.USER,           
    password: process.env.PASSWORD,                                            
    port: process.env.MSSQL_DB_PORT,  
    options: {  
    trustedconnection: true,     
    enableArithAbort: true,
    trustServerCertificate: true,      
}});

//DATABASE: connection string to db. //
dbconnection.connect(function(error) {
    if(error) throw error;
    console.log("My SQL Database Connected Successfully"); 
});

module.exports = dbconnection;