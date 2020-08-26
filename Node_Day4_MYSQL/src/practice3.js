const Promise = require("bluebird");
const mysql = require("mysql");

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
    try {
        console.log("I.AM.ABOUT.TO.READ.DB");

        // STEP::1 :: CONNECT WITH DATBASE USNG CREDENTIAL
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "node",
        });

        // connection.connect();  // normal method from mysql module
        await connection.connectAsync(); // because of bluebird :: Promisified method

        console.log("CONNECTION.SUCCESSFUL!!");

        await connection.endAsync();                //close connection
    } catch (err) {
        console.log(err);
    }
};

readAllUser();