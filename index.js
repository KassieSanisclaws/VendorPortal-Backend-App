const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
    
dotenv.config();
const userRoute = require("./Routes/userRoute");
const vendorRoute = require("./Routes/vendorRoute");

// This creates the express app framework within the application.//
const app = express();
// This  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next)=> {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Accept, X-Requested-With, Origin, Authorization");
    next();
});

//Routes://
app.use("/api/user", userRoute);
app.use("/api/vendor", vendorRoute);

// Server response on successful connection. 
app.get("/", (req, res)=> {
    res.send("Sever is Ready");
});  

// Error message handler.
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

// Server port set-up.
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is ready at http://localhost:${port}`);
});

module.exports = app;
