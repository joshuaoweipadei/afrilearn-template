const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const dbConnect = require("./_helpers/dbConnect")
const app = express();

let port = process.env.PORT || 4000;

// Connect Database
dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const account = require("./account/account.controller")

app.use("/api/account", account);

app.listen(port, () => {
    console.log("Server is running on port " + port);
})