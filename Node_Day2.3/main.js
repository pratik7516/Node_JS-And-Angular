const pra1 = require("./src/practice1");
const http = require("http");


http.createServer((Request, Response) => {


    Response.setHeader("Acess-control-Allow-Origin", "*");

    const str = JSON.stringify(pra1.list);  //converted given data into the string bc http supports only string

    Response.end(str);      //response send to client

}).listen(5600);