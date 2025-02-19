const express = require("express") // Use express.js module
const log = require("morgan")   // Use morgan module
const http = require("http")    // use http module

const app = express() //Create express.js app

app.use((req, res, next) => { //request, response, next function
    const minute = new Date().getMinutes() //Create a constant that holds the current amount of minutes
    if(minute % 2 === 0) { //if the current time minutes reminder of 2 equals 0 
        next() //continue to the next function

    } else { //otherwise
        res.statusCode = 403 //provide the error code
        res.end("Not Authorized.") //End the reponse providing the reason
    }
})

app.use((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"}) //create a callback handler req, status code 200, content plain text
    res.end("It's Over.") //End the response, provide the reason.
})

http.createServer(app).listen(3000) //Create local server using port 3000
