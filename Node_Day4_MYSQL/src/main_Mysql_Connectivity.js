const Promise = require("bluebird");  //To import blubird
const mysql = require("mysql");         //import mysql library


Promise.promisifyAll(require("mysql/lib/Connection").prototype);     //promicification
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {                                         //connect database using crediantials
    host: "localhost",
    user: "root",
    password: "",
    database: "node",
};

let addRecord = async () => {                                //It will return promise
    const connection = mysql.createConnection(DB_CONFIG);    //we havent take async here bc in DB_CONFIG//data is text
    await connection.connectAsync();                          // connection Open      

    // LOGIC
    let sql =
        "INSERT INTO USER (name,password,age) VALUES (?, ?, ?)";
    let operation = await connection.queryAsync(sql, [
        "pratik",
        "12345",
        "23"
    ]);

    await connection.endAsync();                    //close the connection
    return operation;
};

addRecord();
