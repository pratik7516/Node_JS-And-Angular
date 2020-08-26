const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "node",
    });

    // connection open
    await connection.connectAsync(); // return promise

    // let query
    let sql = "SELECT * FROM USER";
    let results = await connection.queryAsync(sql);

    // close the connection
    connection.end();

    console.log(results);
    return results;
};

helloDatabase();