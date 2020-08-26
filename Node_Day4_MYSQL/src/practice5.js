const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "node",
};

let helloDatabase = async () => {
    const connection = mysql.createConnection(DB_CONFIG);

    // connection open
    await connection.connectAsync(); // promise

    // let query
    let sql = "SELECT * FROM USER";
    let results = await connection.queryAsync(sql);

    // close the connection
    connection.end();

    console.log(results);
    return results;
};

let readByQuery = async () => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE ID=2";
    let results = await connection.queryAsync(sql);

    connection.end();
    return results;
};


let readByQuery1 = async () => {
    const connection = mysql.createConnection(DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE ID=?";
    let result = await connection.queryAsync(sql, [1]);

    await connection.endAsync();
    return result;
};

let readByQuery2 = async () => {
    const connection = mysql.createConnection(DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE ID=? AND NAME=?";
    let result = await connection.queryAsync(sql, [1, "pratik"]);

    await connection.endAsync();
    return result;
    console.log("result");
};

readByQuery2();