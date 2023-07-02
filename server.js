var http = require("http");
//var app = require("./app");
const app2 = require("./app2");

http.createServer(app2.handleRequest).listen(8000);
