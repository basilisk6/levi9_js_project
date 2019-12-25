var express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes').setRoutes;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//
app.use(express.static("public"));

setRoutes(app);

app.listen(3000);