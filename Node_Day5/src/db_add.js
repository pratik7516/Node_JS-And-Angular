const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

let addRecord = async () => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        "pratik shinde",
        "pratik",
        "pratik@gmail.com",
        "8938938899",
    ]);

    await connection.endAsync();
};

/**
 *
 * @param {*} username
 * @param {*} pasword
 * @param {*} email
 * @param {*} mobile
 */
let addRecordWithParam = async (username, pasword, email, mobile) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [username, pasword, email, mobile]);

    await connection.endAsync();
};

/**
 * Preferred :: Practice This
 * @param {*} user
 */
let addRecordWithJsonParam = async (user) => {
    const connection = mysql.createConnection(config.DB_CONFIG);

    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        user.username,
        user.password,
        user.email,
        user.mobile,
    ]);

    await connection.endAsync();
};

module.exports = { addRecord, addRecordWithParam, addRecordWithJsonParam };