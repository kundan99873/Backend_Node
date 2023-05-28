const express = require("express");
const app = express();
const connectToMongo = require("./db");
const bodyParser = require("body-parser");
const user = require("./routes/user")
const notes = require("./routes/note")

connectToMongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.listen(4000,() => {
    console.log("connect to inotebook backend")
});

app.use("/user",user);
app.use("/notes",notes);