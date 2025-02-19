const express = require("express"); //import express module
const morgan = require("morgan"); //import morgan module

const app = express(); //declare the creation of an express app

app.use((req, res, next) => { //use .method  for request and next, to check if the url is correct, if is wrong throw error.
    if (req.url === "/") {
        next()
    } else if 
        (req.url === "/throw") {
            throw new Error("Wrong path!")
        } else {
            next ("You did not visit the root!")
        }
})

app.use((req, res) => { //if url is correct respond with message
    res.send("Welcome to the home page.")
})

app.use((err, req, res, next) => { //create error for server error
    console.error(err)
    res.status(500)
    next(err)
})

app.use((err, req, res, next) => { //catch any error invoking .use method
    res.send ("Error message: "+ err)
})

app.listen(3000, () => { //declare local server
    console.log("App started on port 3000")
})
