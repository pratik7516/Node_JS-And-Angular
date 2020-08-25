// READ THE FILE
const fs = require("fs");

/**
 * Simpleer to Explain
 * There is no Asynchronous :: Non Blocking
 *
 */
let readDemoWithException = () => {
    try {
        const filePath = "C:\Users\PRATIK SHINDE\Desktop\1.txt";
        const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

        console.log(fileContent);
    } catch (err) {
        console.log("There is some problem", err.message);
    }
};

let readDemoWithoutException = () => {
    const filePath = "C:\Users\PRATIK SHINDE\Desktop\1.txt";
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    console.log(fileContent);
};

readDemoWithException();