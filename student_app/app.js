const http = require("http")
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
 
const app = express()
 
const entries = []
app.locals.entries = entries
let entryId = 1
 
app.set("views", path.resolve(__dirname, "views"))
app.set("view engine", "ejs")
 
app.use(bodyParser.urlencoded({extent: false}))
 
app.get("/", (req,res) => {
    res.render("index")
})
 
app.get("/new-entry", (req,res) => {
    res.render("new-entry")
})
 
app.post("/new-entry", (req,res) => {
    if(!req.body.title || req.body.body) {
        res.status(400).send("Entries must have a title and an information body. Please enter your details")
        return
    }
    const newEntry = {
        id: entryId++,
        title: req.body,
        body: req.body.body,
        published: new Date()
    };
    entries.push(newEntry)
    res.redirect("/")
})

app.get("/edit-entry/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const entry = entries.find(e => e.id === id)
    if (!entry) {
        res.status(404).send("Entry not found")
        return
    }
    res.render("edit-entry",{entry})
})

app.post("/edit-entry/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const entry = entries.find(e => e.id === id)
    if (!entry) {
        res.status(404).send("Entry not found")
        return
    }
    if(!req.body.title || !req.body) {
        res.status(400),send("Both title and text are required!")
    }

    entry.title = req.body.title,
    entry.body = req.body.body,
    entries.publish = new Date()
    res.redirect("/")
})

app.post("/delete-entry/:id", (req,res) => {
    const id = parseInt(req.params.id)
    const index = entries.findIndex(e => e.id === id)
    if(index === -1) {
        res.status(404).send("Entry not found")
        return
    }
    entries.splice(index, 1)
    res.redirect("/")
})


app.use((req,res) => {
    res.status(404).render("404")
})

http.createServer(app).listen(3000, () => {
    console.log("Student Example app started.")
})