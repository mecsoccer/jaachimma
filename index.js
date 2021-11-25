const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, ".")));

const port = process.env.PORT || "3002";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, "0.0.0.0");

console.log("server listening at:", port);

module.exports = server;
