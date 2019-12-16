//Import express framework
const express = require("express")
//Initialize server object
const app = express()

let users = []

//Parse request data coming in
app.use(express.json())
//Serve ‘public’ folder as static website
app.use(express.static('public') )

app.post("/login", (request, response) => {
    let username = request.body.username
    let password = request.body.password
    console.log( username + " " + password)
    users.push( username)
    users.push( password)
    response.send("You logged in Successfully.")
})
app.post("/save", (request, response) => {
    let username = request.body.trigger
    console.log( trigger)
    users.push( trigger)
    response.send("Your triggers are saved.")
})
//Listen for web requests
app.listen(80,() => console.log("Server Started"))