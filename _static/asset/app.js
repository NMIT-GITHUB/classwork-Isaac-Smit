const express = require("express"); //decalre modules
const path = require("path");
const http = require("http");

const app = express(); //decalre thec reation of an express app

const publicPath = path.resolve(__dirname, "asset") //decalre the public file path as a constant
app.use(express.static(publicPath)) //use dot method taking in the public path as a parameter

app.use((req,res) => {  // decalreuse dot method, taking request and response as parameters to throw errors
    res.writeHead(404, {"Content-Type" : "text/plain"})
    res.end("File not Found!")
});

http.createServer(app).listen(3000)  //create local server using http method

function greeting(){ //function for greeting
    console.log("Hello!")
}
