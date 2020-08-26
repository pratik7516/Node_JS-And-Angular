


let fs = require("fs");      //used Internal module

let Promise = require("bluebird");              //bluebird convets all callback into asynchronous
// helping us to get new metohd; from callback method => promise based method;
Promise.promisifyAll(fs);

const filePath = "/Users/research/Desktop/temp.txt";
fs.readFileAsync(filePath, { encoding: "utf-8" })               //reading file
    .then((data) => {                                            //.then for success handles
        console.log(data);
    })

    .catch((err) => {                                               //.catch  for failuare handles
        console.log(err);
    });