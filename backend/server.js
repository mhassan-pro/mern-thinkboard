// Import Express toolbox to create a web server
import express from "express";

// Create a server called "app" using Express
const app = express();


// A method used to listen incomming requests on ports 5000.
app.listen(5000,()=>{
    console.log("Server is running on port 5000.");
});