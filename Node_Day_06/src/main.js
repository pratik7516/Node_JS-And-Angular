    let express = require("express");      //Express work like a server//creating url and api//works like http server
let cors = require("cors");                 // for the allowing all the client to the server


const app = express();

app.use(cors());   //middlewere runs in advance//unblocking cors policy
app.use(express.json());    //convert data from text to Json


const Add_DB = require("./Add_In_Database");

/* http://localhost:3000/welcome*/

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/adduser", async (req, res) => {
    try {
        // lets read the query parameter
        const input = req.query;

        // calling db logic :: async :: non blocking
        await Add_DB.addRecord(input);
        
        res.json({ message: "success" });
    } catch (err) {
        res.json({ message: "failure" });
    }
});


app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;

    await Add_DB.addRecord(input);

    res.json({ message: "success" });
  } catch (err) {
    res.sendStatus(500);
  }
});



app.listen(3000);
