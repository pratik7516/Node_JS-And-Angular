const fs = require("fs");

/**
 * Will Solve this Via Promise
 */
let readFileDemo = () => {
    // Reading File 1
    const filePath1 = "C:\Users\PRATIK SHINDE\Desktop\1.txt";
    fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
        // File 1 Done
        console.log("1", data);

        // Reading File 2
        const filePath2 = "C:\Users\PRATIK SHINDE\Desktop\1.txt";
        fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
            // File 2 Done
            console.log("2", data);

            // Reading File 3
            const filePath3 = "C:\Users\PRATIK SHINDE\Desktop\2.txt";
            fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
                // File 3 Done
                console.log("3", data);

                // Reading File 4
                const filePath3 = "C:\Users\PRATIK SHINDE\Desktop\2.txt";
                fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
                    // File 3 Done
                    console.log("3", data);

                    // Reading File 4
                    const filePath3 = "/Users/research/Desktop/temp-2.txt";
                    fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
                        // File 3 Done
                        console.log("3", data);

                        // Reading File 4
                        const filePath3 = "/Users/research/Desktop/temp-2.txt";
                        fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
                            // File 3 Done
                            console.log("3", data);

                            // Reading File 4
                            const filePath3 = "/Users/research/Desktop/temp-2.txt";
                            fs.readFile(
                                filePath3,
                                { encoding: "utf-8" },
                                (err, data) => {
                                    // File 3 Done
                                    console.log("3", data);
                                }
                            );
                        });
                    });
                });
            });
        });
    });
};

readFileDemo();