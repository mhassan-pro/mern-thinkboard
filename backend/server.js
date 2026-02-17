// Import Express toolbox to create a web server
import express from "express";

// Create a server called "app" using Express
const app = express();

// When someone visits "/api/notes", send them a message with the notes count
app.get("/api/notes", (req,res)=>{
    res.send("You got 6 notes..")
});

// A method used to listen incomming requests on ports 5000.
app.listen(5000,()=>{
    console.log("Server is running on port 5000.");
});