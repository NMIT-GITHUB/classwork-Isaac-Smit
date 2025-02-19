const express = require("express"); //declare express module


const app = express(); //declarethe creation of an express application

app.get("/random/:min/:max", (req, res) => { //call the get method for a random number between min and max
    const min = parseInt(req.params.min) //declare the minimum number as the result of a request and change the string to an int
    const max = parseInt(req.params.max) //declare the maximum number as the result of a request and change the string to an int

    if(isNaN(min) || isNaN(max)) { //if the request doesnt pull a number, then throw an error
        res.status(400)
        res.json({error: "Bad request."})
        return
    }

    const result = Math.round(Math.random() * (max-min) + min) // declare the result (by rounding the integer that is randomly chosen, then mulitply it randomly and add the minimum)
    res.json({result: result}) //get a response in a JSON format, it equals the result
})

//create a local server on port 3000
app.listen(3000, () => {
    console.log("App started on port 3000")
})
