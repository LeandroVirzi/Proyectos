const express = require("express");
const bodyParser = require("body-parser");
const { API_VERSION } = require("./config");

const app = express(); // inicializacion de express



// load routings
// ....

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure Header HTTP
// ....

// Ruter Basic
// ....

// exportamos las configuraciones que se encuentran dentro de app
module.exports = app;











