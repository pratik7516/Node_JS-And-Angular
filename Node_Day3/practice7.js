const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
    const filePath1 = "/Users/research/Desktop/temp.txt";

    fs.readFileAsync(filePath1, { encoding: "utf-8" })
        .then((data) => {
            console.log(data);

            const filePath2 = "C:\Users\PRATIK SHINDE\Desktop\2.txt";
            return fs.readFileAsync(filePath2, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);

            const filePath3 = "C:\Users\PRATIK SHINDE\Desktop\2.txt";
            return fs.readFileAsync(filePath3, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

readDemo();