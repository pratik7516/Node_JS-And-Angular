const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

let readAllUser = async () => {                                             //read all the users
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER";
    let results = await connection.queryAsync(sql);

    await connection.endAsync();
    return results;
};

let readUserByQuery = async () => {                                     //read all by Query
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=? ";
    let results = await connection.queryAsync(sql, [1, "onkar@gmail.com"]);

    await connection.endAsync();
    return results;
};


let readUserByQueryParams = async (id, email) => {                          // Id and Email
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=? ";
    let results = await connection.queryAsync(sql, [id, email]);

    await connection.endAsync();
    return results;
};


let readUserByQueryJsonParam = async (user) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=? ";
    let results = await connection.queryAsync(sql, [user.id, user.email]);

    await connection.endAsync();
    return results;
};

module.exports = {
    readAllUser,
    readUserByQuery,
    readUserByQueryParams,
    readUserByQueryJsonParam,
};