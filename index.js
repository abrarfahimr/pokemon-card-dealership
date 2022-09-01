const express = require('express');
const app = express();
const cors = require('cors');
const pokemon = require('./routes/pokemon');
require('dotenv').config();

const PORT = process.env.PORT;

//CORS middleware
app.use(cors());

//Middleware to give access to req.body
app.use(express.json());

//give access to urlencoded data.
app.use(express.urlencoded({ extended: true }));

//Middleware to serve up static files
app.use(express.static("public"));

//route to all pokemon list
app.use("/pokemon", pokemon);

//startup the local server
app.listen(PORT, () => {
  console.log("Server is up and running")
})